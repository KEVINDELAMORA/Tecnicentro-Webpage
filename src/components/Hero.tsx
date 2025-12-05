export default function Hero() {
    return (
        <div className="relative bg-brand-dark overflow-hidden">
            {/* Background Pattern/Image Overlay */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="md:w-2/3">
                    <div className="inline-block bg-brand-yellow text-brand-dark font-bold px-3 py-1 mb-6 text-sm uppercase tracking-widest skew-x-[-10deg]">
                        <span className="block skew-x-[10deg]">Expertos en Corte y Maquinaria</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-tight mb-6">
                        Potencia y <span className="text-brand-red">Precisión</span> <br />
                        Para Tu Trabajo
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                        Venta de maquinaria, afilado industrial de sierras y reparación de herramientas eléctricas.
                        Soluciones robustas para carpinteros y constructores en Colima.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/523123146950"
                            className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-sm uppercase tracking-wider text-center transition-all hover:scale-105 shadow-lg shadow-red-900/20"
                        >
                            Cotizar Ahora
                        </a>
                        <a
                            href="#servicios"
                            className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-8 rounded-sm uppercase tracking-wider text-center transition-colors"
                        >
                            Ver Servicios
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Strip */}
            <div className="h-2 bg-brand-yellow w-full"></div>
        </div>
    );
}
