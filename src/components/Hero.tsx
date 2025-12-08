'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const heroSlides = [
    {
        image: "/images/hero-disco.jpg",
        title: "Discos de",
        highlight: "Corte Profesional",
        description: "Afilado y venta de discos.",
        bgPosition: "center 30%"
    },
    {
        image: "/images/hero-equipo.jpg",
        title: "Equipo y",
        highlight: "Refacciones",
        description: "Todo para tu maquinaria.",
        bgPosition: "center 75%"
    },
    {
        image: "/images/hero-campo.jpg",
        title: "Herramientas",
        highlight: "Para el Campo",
        description: "Potencia donde la necesitas.",
        bgPosition: "center 70%"
    },
    {
        image: "/images/hero-discos.jpg",
        title: "Variedad en",
        highlight: "Marcas y Modelos",
        description: "Las mejores marcas disponibles.",
        bgPosition: "center 30%"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isAnimating) {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [isAnimating]);

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 700);
    };

    const goToPrev = () => {
        goToSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1);
    };

    const goToNext = () => {
        goToSlide((currentSlide + 1) % heroSlides.length);
    };

    return (
        <div className="relative bg-brand-dark overflow-hidden h-[600px] md:h-[700px]">
            {/* Background Images with Transition */}
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${slide.image}')`,
                            backgroundPosition: slide.bgPosition
                        }}
                    ></div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                    {/* Bottom gradient for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
            ))}

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl animate-float pointer-events-none"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1s' }}></div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-brand-red/80 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 group"
                aria-label="Slide anterior"
            >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-brand-red/80 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 group"
                aria-label="Siguiente slide"
            >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="md:w-2/3 lg:w-1/2 relative z-10">
                    {/* Badge */}
                    <div className="inline-block bg-brand-red text-white font-bold px-4 py-2 mb-6 text-sm uppercase tracking-widest rounded-sm shadow-lg glow-red animate-fade-in">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            Expertos en Corte y Maquinaria
                        </span>
                    </div>

                    {/* Title Container */}
                    <div className="h-40 md:h-48 relative">
                        {heroSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 transform ${index === currentSlide
                                    ? 'opacity-100 translate-y-0 translate-x-0'
                                    : 'opacity-0 translate-y-8 -translate-x-4'
                                    }`}
                            >
                                <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-6">
                                    {slide.title} <br />
                                    <span className="gradient-text drop-shadow-2xl">{slide.highlight}</span>
                                </h1>
                            </div>
                        ))}
                    </div>

                    {/* Description Container */}
                    <div className="h-24 relative mb-10">
                        {heroSlides.map((slide, index) => (
                            <p
                                key={index}
                                className={`absolute inset-0 text-xl text-white/90 max-w-xl leading-relaxed font-medium drop-shadow-md transition-all duration-700 delay-100 ${index === currentSlide
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`}
                            >
                                {slide.description}
                            </p>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/523123146950"
                            className="bg-brand-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-sm uppercase tracking-wider text-center transition-all btn-lift shadow-xl flex items-center justify-center gap-3 group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Cotizar Ahora
                        </a>
                        <a
                            href="#servicios"
                            className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-dark text-white font-bold py-4 px-8 rounded-sm uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Ver Servicios
                            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide
                            ? 'bg-brand-red w-12 shadow-lg glow-red'
                            : 'bg-white/40 w-2 hover:bg-white/70 hover:w-4'
                            }`}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-scroll-indicator">
                <a href="#servicios" className="flex flex-col items-center text-white/60 hover:text-white transition-colors">
                    <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
                    <ChevronDown className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
}
