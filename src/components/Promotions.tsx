'use client';

import { Facebook, Sparkles, Tag } from 'lucide-react';

export default function Promotions() {
    return (
        <section className="py-24 bg-gradient-to-br from-brand-red via-red-600 to-brand-red relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 text-white/10">
                <Sparkles className="w-24 h-24 animate-float" />
            </div>
            <div className="absolute bottom-10 right-10 text-white/10">
                <Tag className="w-32 h-32 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-brand-dark/95 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl border-l-8 border-brand-yellow flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative overflow-hidden">

                    {/* Glow effect */}
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-yellow/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-red/20 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left relative z-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-6 animate-bounce-slow">
                            <Sparkles className="w-4 h-4" />
                            ¡Ofertas Especiales!
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-6 leading-tight">
                            ¿Buscas las <span className="text-brand-yellow">Mejores Ofertas</span>?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                            Publicamos nuestras mejores promociones, descuentos de temporada y novedades directamente en nuestra página de Facebook. ¡No te las pierdas!
                        </p>

                        <a
                            href="https://www.facebook.com/share/17Y2ryo5Mu/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 btn-lift group"
                        >
                            <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            Ver Promociones en Facebook
                        </a>
                    </div>

                    {/* Promo Image/Card */}
                    <div className="w-full lg:w-2/5 relative">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=800&auto=format&fit=crop"
                                alt="Promociones Tecnicentro"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay with promo text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent flex flex-col justify-end p-6">
                                <div className="bg-brand-yellow text-brand-dark font-black px-4 py-2 rounded-lg inline-block w-fit mb-2 text-lg">
                                    HASTA 30% OFF
                                </div>
                                <p className="text-white font-bold text-xl">En herramientas seleccionadas</p>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -top-4 -right-4 bg-brand-yellow text-brand-dark font-black px-4 py-2 rounded-full text-sm uppercase animate-bounce-slow shadow-lg">
                            ¡Síguenos!
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
