import { Truck, ShieldCheck, MessageCircle, PackageCheck } from "lucide-react";
export default function TrustBadges() {
  return (
    <div className="service-strip container">
      {[
        {
          icon: Truck,
          title: "Across Kenya",
          text: "Delivery quoted for your location",
        },
        {
          icon: ShieldCheck,
          title: "1-year warranty",
          text: "On our catalog furniture",
        },
        {
          icon: PackageCheck,
          title: "Pay on delivery",
          text: "Available within Nairobi",
        },
        {
          icon: MessageCircle,
          title: "Personal assistance",
          text: "A real team, a considered choice",
        },
      ].map(({ icon: Icon, title, text }) => (
        <div key={title}>
          <Icon size={24} strokeWidth={1.4} />
          <p>
            <strong>{title}</strong>
            <span>{text}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
