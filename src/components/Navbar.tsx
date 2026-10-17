"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ShoppingBag, ArrowUpRight, Search } from "lucide-react";
import { business, enquiryUrl, categories } from "@/lib/catalog";
interface Props {
  count: number;
  onOpenBag: () => void;
  onCategory: (id: string) => void;
  onSearch: () => void;
}
export default function Navbar({
  count,
  onOpenBag,
  onCategory,
  onSearch,
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="announcement">
        <span>Furniture for work. Spaces for people.</span>
        <a href={`tel:${business.phone.replace(/\s/g, "")}`}>
          {business.phone}
          <ArrowUpRight size={12} />
        </a>
      </div>
      <div className="container nav-main">
        <a href="#" className="brand" aria-label="Acacia Furniture Kenya home">
          <Image
            src="/brand/favicon.jpeg"
            width={48}
            height={48}
            alt=""
            priority
          />
          <span>
            ACACIA<small>FURNITURE KENYA</small>
          </span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          <a href="#collection">Collection</a>
          <a href="#spaces">Shop by space</a>
          <a href="#trade">For business</a>
          <a href="#contact">Visit & contact</a>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={onSearch}
            aria-label="Search products"
          >
            <Search size={21} />
          </button>
          <button
            className="icon-button bag-button"
            onClick={onOpenBag}
            aria-label={`Open quote bag, ${count} items`}
          >
            <ShoppingBag size={21} />
            {count > 0 && <span className="bag-count">{count}</span>}
          </button>
          <button
            className="icon-button mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                onCategory(c.id);
                setOpen(false);
              }}
            >
              {c.name}
              <ArrowUpRight size={16} />
            </button>
          ))}
          <a href="#trade" onClick={() => setOpen(false)}>
            For business
          </a>
          <a
            href={enquiryUrl(
              "Hello Acacia, I would like help choosing furniture.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Talk to our team
          </a>
        </nav>
      )}
    </header>
  );
}
