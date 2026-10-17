"use client";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowUpRight, ShoppingBag } from "lucide-react";
import { Product, formatKsh, enquiryUrl } from "@/lib/catalog";
import Dialog from "./Dialog";
export interface QuoteItem {
  product: Product;
  quantity: number;
}
export default function QuoteBag({
  items,
  onQuantity,
  onClose,
}: {
  items: QuoteItem[];
  onQuantity: (id: string, quantity: number) => void;
  onClose: () => void;
}) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const message = `Hello Acacia, please prepare a quotation for:\n\n${items.map(({ product: p, quantity }) => `${quantity} × ${p.name} (${p.sku}) — ${formatKsh(p.price * quantity)}`).join("\n")}\n\nListed subtotal: ${formatKsh(total)}\nPlease confirm stock, finishes, bulk pricing and delivery costs.`;
  return (
    <Dialog title="Your quote bag" onClose={onClose}>
      {items.length ? (
        <>
          <p className="bag-intro">
            A few pieces closer to your new space. Adjust quantities, then ask
            our team for a quotation.
          </p>
          <div className="bag-items">
            {items.map(({ product: p, quantity }) => (
              <div className="bag-item" key={p.id}>
                <Image
                  src={p.images[0].url}
                  alt={p.images[0].alt}
                  width={76}
                  height={86}
                  className="object-contain"
                />
                <div>
                  <h3>{p.name}</h3>
                  <p>{formatKsh(p.price)}</p>
                  <div className="quantity-control">
                    <button
                      disabled={quantity <= 1}
                      aria-label={`Decrease quantity of ${p.name}`}
                      onClick={() => onQuantity(p.id, quantity - 1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span aria-label={`Quantity: ${quantity}`}>{quantity}</span>
                    <button
                      disabled={quantity >= 999}
                      aria-label={`Increase quantity of ${p.name}`}
                      onClick={() => onQuantity(p.id, quantity + 1)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button
                  className="icon-button"
                  aria-label={`Remove ${p.name}`}
                  onClick={() => onQuantity(p.id, 0)}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))}
          </div>
          <div className="bag-total">
            <span>Estimated subtotal</span>
            <strong>{formatKsh(total)}</strong>
          </div>
          <p className="fine-print">
            Delivery is quoted separately. This is an enquiry, not a confirmed
            order or payment.
          </p>
          <a
            className="button primary full-width"
            href={enquiryUrl(message)}
            target="_blank"
            rel="noreferrer"
          >
            Request quote on WhatsApp
            <ArrowUpRight size={18} />
          </a>
          <button className="text-link continue-link" onClick={onClose}>
            Continue exploring
          </button>
        </>
      ) : (
        <div className="empty-state">
          <ShoppingBag size={36} strokeWidth={1.3} />
          <h3>Make room for something good.</h3>
          <p>Add pieces from the collection to request a personalised quote.</p>
          <button className="button primary" onClick={onClose}>
            Explore the collection
          </button>
        </div>
      )}
    </Dialog>
  );
}
