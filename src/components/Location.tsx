'use client';

import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';

const contactInfo = [
    {
        icon: MapPin,
        title: "Dirección",
        content: (
            <>
                Maclovio Herrera 257<br />
                Colonia Centro, Colima, Col.
            </>
        ),
        link: {
            href: "https://maps.app.goo.gl/6dTQtKhPbLYH8kGcA",
            label: "Cómo llegar (GPS)"
        },
        linkIcon: Navigation
    },
    {
        icon: Phone,
        title: "Teléfono",
        content: "312 314 6950",
        link: {
            href: "tel:+523123146950",
            label: "Llamar ahora"
        }
    },
    {
        icon: Clock,
        title: "Horario",
        content: (
            <>
                Lunes a Viernes: 9:00 AM - 2:00 PM y 4:00 PM - 6:00 PM<br />
                Sábado: 9:00 AM - 1:00 PM<br />
                <span className="text-brand-red font-semibold">Domingo: Cerrado</span>
            </>
        )
    }
];

export default function Location() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.reveal-item');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="ubicacion" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Contact Info */}
                    <div className="reveal-item reveal">
                        {/* Header */}
                        <span className="inline-block text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
                            Encuéntranos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight mb-8 leading-tight">
                            Visítanos en <span className="gradient-text">Colima</span>
                        </h2>

                        {/* Storefront Image */}
                        <div className="mb-10 rounded-xl overflow-hidden shadow-xl border-2 border-gray-100 group">
                            <img
                                src="/images/fachada.jpg"
                                alt="Fachada Tecnicentro de Colima"
                                className="w-full h-auto max-h-[400px] object-cover bg-gray-100 transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => {
                                const IconComponent = item.icon;
                                const LinkIcon = item.linkIcon || null;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 card-premium group"
                                    >
                                        <div className="bg-gradient-to-br from-brand-red to-red-600 p-4 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-brand-dark uppercase mb-2 tracking-wide">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {item.content}
                                            </p>
                                            {item.link && (
                                                <a
                                                    href={item.link.href}
                                                    target={item.link.href.startsWith('http') ? '_blank' : undefined}
                                                    rel={item.link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    className="inline-flex items-center gap-2 mt-3 text-brand-red font-bold hover:text-red-600 transition-colors uppercase text-sm tracking-wider group/link"
                                                >
                                                    {LinkIcon && <LinkIcon className="w-4 h-4" />}
                                                    {item.link.label}
                                                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="mt-8">
                            <a
                                href="https://wa.me/523123146950"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-xl uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl btn-lift group"
                            >
                                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                Escríbenos por WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="reveal-item reveal lg:sticky lg:top-32">
                        <div className="h-[400px] lg:h-[600px] bg-gray-200 rounded-xl overflow-hidden border-4 border-white shadow-2xl relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.187376666754!2d-103.731456!3d19.237456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255aa6d0555555%3A0x5555555555555555!2sMaclovio%20Herrera%20257%2C%20Centro%2C%20Colima!5e0!3m2!1sen!2smx!4v1600000000000!5m2!1sen!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="transition-all duration-500"
                                title="Mapa de ubicación"
                            ></iframe>

                            {/* Map overlay with address */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="font-bold text-brand-dark">Tecnicentro de Colima</p>
                                <p className="text-sm text-gray-600">Maclovio Herrera 257, Centro</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
