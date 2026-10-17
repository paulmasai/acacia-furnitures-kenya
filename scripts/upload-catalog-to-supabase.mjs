#!/usr/bin/env node
/**
 * Upload public/catalog and public/brand to public Supabase Storage buckets.
 *
 * Requires in .env.local:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 *
 * Usage: node scripts/upload-catalog-to-supabase.mjs
 */
import { createClient } from "@supabase/supabase-js";
import { readdir, readFile, realpath, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync, existsSync } from "node:fs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadEnvLocal() {
  const envPath = path.join(root, ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvLocal();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local",
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function ensureBucket(name) {
  const { data: buckets, error: listErr } = await supabase.storage.listBuckets();
  if (listErr) throw listErr;
  if ((buckets || []).some((b) => b.name === name)) {
    console.log(`bucket exists: ${name}`);
    return;
  }
  const { error } = await supabase.storage.createBucket(name, {
    public: true,
    fileSizeLimit: 20 * 1024 * 1024,
  });
  if (error) throw error;
  console.log(`bucket created: ${name}`);
}

async function collectFiles(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await collectFiles(full)));
      continue;
    }
    try {
      const real = await realpath(full);
      if ((await stat(real)).isFile()) out.push({ full, real });
    } catch (err) {
      console.warn(`skip ${full}:`, err.message);
    }
  }
  return out;
}

function mimeFor(filePath) {
  const lower = filePath.toLowerCase();
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".gif")) return "image/gif";
  return "image/jpeg";
}

async function uploadDir(bucket, localDir) {
  const files = await collectFiles(localDir);
  let ok = 0;
  let fail = 0;
  for (const { full, real } of files) {
    const objectPath = path.relative(localDir, full).split(path.sep).join("/");
    const body = await readFile(real);
    const { error } = await supabase.storage.from(bucket).upload(objectPath, body, {
      contentType: mimeFor(real),
      upsert: true,
      cacheControl: "31536000",
    });
    if (error) {
      fail += 1;
      console.error(`FAIL ${bucket}/${objectPath}:`, error.message);
    } else {
      ok += 1;
      console.log(`OK   ${bucket}/${objectPath}`);
    }
  }
  return { ok, fail, total: files.length };
}

const catalogDir = path.join(root, "public/catalog");
const brandDir = path.join(root, "public/brand");

await ensureBucket("catalog");
await ensureBucket("brand");
const catalog = await uploadDir("catalog", catalogDir);
const brand = await uploadDir("brand", brandDir);

const mediaBase = `${supabaseUrl.replace(/\/$/, "")}/storage/v1/object/public/catalog`;
console.log(JSON.stringify({ catalog, brand, mediaBase }, null, 2));
console.log(
  "Set NEXT_PUBLIC_CATALOG_MEDIA_URL to mediaBase in .env.local and Cloudflare/GitHub build env before building.",
);
