import { Facebook, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-white relative overflow-hidden">
            {/* Top accent line */}
            <div className="h-1 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red"></div>

            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <img
                            src="/images/logo_new.png"
                            alt="Tecnicentro de Colima"
                            className="h-20 w-auto mb-6 brightness-0 invert"
                        />
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Tu aliado en herramientas y maquinaria industrial. Más de 20 años brindando soluciones de calidad en Colima.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/share/17Y2ryo5Mu/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/523123146950"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-[#25D366] p-3 rounded-lg transition-all duration-300 hover:scale-110"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-brand-red">
                            Navegación
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-3 h-0.5 bg-brand-red transition-all duration-300"></span>
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a href="#ubicacion" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-3 h-0.5 bg-brand-red transition-all duration-300"></span>
                                    Ubicación
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/share/17Y2ryo5Mu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-3 h-0.5 bg-brand-red transition-all duration-300"></span>
                                    Promociones
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-brand-red">
                            Servicios
                        </h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400">Afilado Industrial</li>
                            <li className="text-gray-400">Venta de Maquinaria</li>
                            <li className="text-gray-400">Reparación y Mantenimiento</li>
                            <li className="text-gray-400">Sierra Cintas a Medida</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-brand-red">
                            Contacto
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                                <span>Maclovio Herrera 257, Centro, Colima</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                                <a href="tel:+523123146950" className="text-gray-400 hover:text-white transition-colors font-bold">
                                    312 314 6950
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Clock className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                                <span>Lun-Vie: 9-6 PM<br />Sáb: 9-2 PM</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} Tecnicentro de Colima. Todos los derechos reservados.
                        </p>
                        <p className="text-gray-600 text-xs">
                            Hecho con ❤️ en Colima, México
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent"></div>
        </footer>
    );
}
