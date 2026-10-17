import Image from "next/image";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { business, enquiryUrl } from "@/lib/catalog";
export default function Footer() {
  return (
    <footer id="contact">
      <div className="container footer-main">
        <div className="footer-brand">
          <Image
            src="/brand/logo.jpeg"
            alt="Acacia Furnitures"
            width={210}
            height={140}
          />
          <p>
            Furniture for the way you work,
            <br />
            gather and get things done.
          </p>
        </div>
        <div>
          <h2>Let’s find your next piece.</h2>
          <a
            className="footer-phone"
            href={`tel:${business.phone.replace(/\s/g, "")}`}
          >
            <Phone size={19} />
            {business.phone}
          </a>
          <a href={`mailto:${business.email}`}>
            <Mail size={17} />
            {business.email}
          </a>
          <p>
            <MapPin size={17} />
            Industrial Area, Nairobi, Kenya
          </p>
          <a
            href={enquiryUrl(
              "Hello Acacia, I would like to visit. Please share your exact showroom location and opening hours.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Plan your visit
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#collection">The collection</a>
          <a href="#spaces">Shop by space</a>
          <a href="#trade">Business & bulk orders</a>
          <a
            href={enquiryUrl(
              "Hello Acacia, please help me with a delivery or warranty question.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Delivery & product support
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {business.name}
        </p>
        <span>Nairobi roots. Spaces across Kenya.</span>
      </div>
    </footer>
  );
}
