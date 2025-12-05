import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

export default function Location() {
    return (
        <section id="ubicacion" className="py-20 bg-brand-dark border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
                            Visítanos en <span className="text-brand-red">Colima</span>
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-brand-gray p-3 rounded-sm text-brand-yellow">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase mb-1">Dirección</h3>
                                    <p className="text-gray-400">
                                        Calle Principal #123 <br />
                                        Colonia Centro, Colima, Col. <br />
                                        (Cerca del Mercado)
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/6dTQtKhPbLYH8kGcA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-2 text-brand-red font-bold hover:text-white transition-colors uppercase text-sm"
                                    >
                                        Cómo llegar (GPS) →
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-brand-gray p-3 rounded-sm text-brand-yellow">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase mb-1">Teléfono</h3>
                                    <p className="text-gray-400">
                                        <a href="tel:+523123146950" className="hover:text-white transition-colors">
                                            312 314 6950
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-brand-gray p-3 rounded-sm text-brand-yellow">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase mb-1">Horario</h3>
                                    <p className="text-gray-400">
                                        Lunes a Viernes: 9:00 AM - 6:00 PM <br />
                                        Sábado: 9:00 AM - 2:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a
                                href="https://wa.me/523123146950"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Mandar WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] lg:h-[500px] bg-brand-gray rounded-sm overflow-hidden border-4 border-brand-gray relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.123456789!2d-103.72!3d19.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE0JzAwLjAiTiAxMDPCsDQzJzAwLjAiVw!5e0!3m2!1sen!2smx!4v1600000000000!5m2!1sen!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                        {/* Note: Coordinates are placeholders, user should provide exact location link or I can try to find it if provided in context */}
                    </div>

                </div>
            </div>
        </section>
    );
}
