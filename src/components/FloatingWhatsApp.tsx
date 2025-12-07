'use client';

import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPulsing, setIsPulsing] = useState(true);

    useEffect(() => {
        // Show button after a short delay
        const timer = setTimeout(() => setIsVisible(true), 1000);

        // Stop pulsing animation after 10 seconds
        const pulseTimer = setTimeout(() => setIsPulsing(false), 10000);

        return () => {
            clearTimeout(timer);
            clearTimeout(pulseTimer);
        };
    }, []);

    return (
        <a
            href="https://wa.me/523123146950"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
            aria-label="Contactar por WhatsApp"
        >
            {/* Outer glow ring */}
            <div className={`absolute inset-0 rounded-full bg-[#25D366] ${isPulsing ? 'animate-ping' : ''} opacity-30`}></div>

            {/* Main button */}
            <div className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] group">
                <img
                    src="/images/whatsapp-official.png"
                    alt="WhatsApp"
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                />
            </div>

            {/* Tooltip */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-dark px-5 py-3 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-gray-100 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
                ¡Escríbenos ahora!
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-white transform -translate-y-1/2 rotate-45 border-r border-t border-gray-100"></div>
            </span>
        </a>
    );
}
