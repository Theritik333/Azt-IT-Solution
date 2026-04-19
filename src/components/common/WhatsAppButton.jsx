import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = "Hello, I want to know more about your services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 hover:bg-green-600 text-white 
        p-3 sm:p-4 rounded-full shadow-xl flex items-center justify-center 
        transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-xl sm:text-2xl" />

        {/* Tooltip (desktop only) */}
        <span className="hidden sm:block absolute right-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;