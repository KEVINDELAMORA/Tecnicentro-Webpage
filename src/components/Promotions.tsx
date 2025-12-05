import { Facebook } from 'lucide-react';

export default function Promotions() {
    return (
        <section className="py-20 bg-brand-red relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('/images/promo-bg.png')] bg-cover bg-center mix-blend-multiply"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-brand-dark p-8 md:p-12 rounded-sm shadow-2xl border-l-8 border-brand-yellow flex flex-col md:flex-row items-center gap-8 md:gap-16">

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
                            ¿Buscas Ofertas?
                        </h2>
                        <p className="text-xl text-gray-300 mb-6">
                            Publicamos nuestras mejores promociones, descuentos de temporada y novedades directamente en nuestra página de Facebook. ¡No te las pierdas!
                        </p>
                        <a
                            href="https://www.facebook.com/share/17Y2ryo5Mu/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider transition-colors"
                        >
                            <Facebook className="w-6 h-6" />
                            Ver Promociones en Facebook
                        </a>
                    </div>

                    {/* Placeholder for a dynamic image or latest post preview */}
                    <div className="w-full md:w-1/3 aspect-video bg-gray-800 rounded-sm flex items-center justify-center border-2 border-dashed border-gray-600">
                        <span className="text-gray-500 font-bold uppercase text-sm text-center px-4">
                            Espacio para Imagen de Promoción del Mes
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}
