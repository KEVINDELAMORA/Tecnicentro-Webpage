'use client';

import { useEffect, useRef } from 'react';
import { Wrench, ShoppingBag, Settings, Scissors } from 'lucide-react';

const services = [
    {
        title: "Afilado Industrial",
        description: "Servicio profesional de afilado para discos de sierra, sierra cintas y cuchillas. Recuperamos el filo original para cortes precisos.",
        image: "/images/afilado.jpg",
        icon: Scissors,
    },
    {
        title: "Venta de Maquinaria",
        description: "Equipos robustos para construcción, agricultura y carpintería. Distribuidores de las mejores marcas del mercado.",
        image: "/images/venta-maquinaria.jpg",
        icon: ShoppingBag,
    },
    {
        title: "Reparación y Mantenimiento",
        description: "Taller especializado en reparación de herramientas eléctricas, compresores y maquinaria ligera. Diagnóstico y refacciones.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
        icon: Settings,
    },
    {
        title: "Sierra Cintas a Medida",
        description: "Fabricación y soldadura de sierra cintas al tamaño exacto que necesitas. Calidad y resistencia garantizada.",
        image: "/images/sierra-cintas.jpg",
        icon: Wrench,
    },
];

export default function Services() {
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
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const cards = sectionRef.current?.querySelectorAll('.service-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="servicios" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red"></div>
            <div className="absolute top-20 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-brand-red font-bold uppercase tracking-widest text-sm mb-4 animate-fade-in">
                        Lo que hacemos
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tight mb-6">
                        Nuestros <span className="gradient-text">Servicios</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-brand-red to-brand-yellow mx-auto rounded-full"></div>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Soluciones integrales para tu taller y obra. Calidad garantizada en cada trabajo.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="service-card reveal bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col card-premium border border-gray-100"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Image Container */}
                                <div className="h-52 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Service Number */}
                                    <div className="absolute top-4 left-4 w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg z-20 group-hover:scale-110 transition-transform">
                                        {index + 1}
                                    </div>
                                    {/* Icon overlay on hover */}
                                    <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <div className="bg-white p-3 rounded-full shadow-xl">
                                            <IconComponent className="w-6 h-6 text-brand-red" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-brand-dark uppercase mb-3 group-hover:text-brand-red transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm flex-1">
                                        {service.description}
                                    </p>
                                    {/* CTA Link */}
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <a
                                            href="https://wa.me/523123146950"
                                            className="text-brand-red font-bold text-sm uppercase tracking-wider hover:text-red-600 transition-colors inline-flex items-center gap-2 group/link"
                                        >
                                            Solicitar Info
                                            <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
