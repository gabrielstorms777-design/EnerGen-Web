import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
    </a>
  );
};

export default WhatsAppButton;