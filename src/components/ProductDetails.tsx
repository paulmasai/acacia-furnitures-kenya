"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { Product, formatKsh, enquiryUrl } from "@/lib/catalog";
import Dialog from "./Dialog";
export default function ProductDetails({
  product,
  onClose,
  onAdd,
}: {
  product: Product;
  onClose: () => void;
  onAdd: (product: Product) => void;
}) {
  const [index, setIndex] = useState(0);
  return (
    <Dialog title="A closer look" onClose={onClose} wide>
      <div className="product-detail">
        <div>
          <div className="detail-image">
            <Image
              src={product.images[index].url}
              alt={product.images[index].alt}
              fill
              sizes="(max-width: 760px) 85vw, 440px"
              className="object-contain"
            />
          </div>
          {product.images.length > 1 && (
            <div className="thumbnails" aria-label="Product photographs">
              {product.images.map((image, i) => (
                <button
                  key={image.url}
                  onClick={() => setIndex(i)}
                  aria-label={`View photo ${i + 1}: ${image.alt}`}
                  aria-pressed={index === i}
                >
                  <Image
                    src={image.url}
                    alt=""
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="detail-copy">
          <span className="sku">{product.sku}</span>
          <h3>{product.name}</h3>
          <p className="detail-price">
            {formatKsh(product.price)}
            <small>per item</small>
          </p>
          <p>{product.specifications}</p>
          <dl>
            <div>
              <dt>Materials</dt>
              <dd>{product.material}</dd>
            </div>
            <div>
              <dt>Finish</dt>
              <dd>{product.finish}</dd>
            </div>
            <div>
              <dt>Dimensions</dt>
              <dd>{product.dimensions}</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>Confirm current stock and lead time with our team.</dd>
            </div>
          </dl>
          <button className="button primary" onClick={() => onAdd(product)}>
            Add to quote bag
            <Plus size={18} />
          </button>
          <a
            className="text-link"
            href={enquiryUrl(
              `Hello Acacia, I would like to know more about ${product.name} (${product.sku}), listed at ${formatKsh(product.price)}. Please confirm available finishes, stock and delivery.`,
            )}
            target="_blank"
            rel="noreferrer"
          >
            Ask about this piece
            <ArrowRight size={16} />
          </a>
          <p className="fine-print">
            Photos may show different finishes or multiple items. Price is per
            item; our team will confirm the exact specification and delivery
            cost.
          </p>
        </div>
      </div>
    </Dialog>
  );
}
