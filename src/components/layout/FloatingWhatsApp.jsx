import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/config";

const FloatingWhatsApp = () => (
  <a
    href={waLink}
    target="_blank"
    rel="noreferrer"
    data-testid="floating-whatsapp-button"
    aria-label="Chat with us on WhatsApp"
    className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-110"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden="true" />
    <MessageCircle className="relative h-6 w-6 fill-white" />
  </a>
);

export default FloatingWhatsApp;
