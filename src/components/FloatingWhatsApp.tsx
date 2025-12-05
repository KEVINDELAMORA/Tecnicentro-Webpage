import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/523123146950"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 flex items-center justify-center group"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-sm text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                ¡Contáctanos!
            </span>
        </a>
    );
}
