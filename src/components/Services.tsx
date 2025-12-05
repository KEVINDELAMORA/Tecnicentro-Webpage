import { Wrench, Disc, Tractor, Hammer } from 'lucide-react';

const services = [
    {
        title: "Afilado Industrial",
        description: "Servicio profesional de afilado para discos de sierra, sierra cintas y cuchillas. Recuperamos el filo original para cortes precisos.",
        icon: <Disc className="w-12 h-12 text-brand-yellow" />,
    },
    {
        title: "Venta de Maquinaria",
        description: "Equipos robustos para construcción, agricultura y carpintería. Distribuidores de las mejores marcas del mercado.",
        icon: <Tractor className="w-12 h-12 text-brand-yellow" />,
    },
    {
        title: "Reparación y Mantenimiento",
        description: "Taller especializado en reparación de herramientas eléctricas, compresores y maquinaria ligera. Diagnóstico y refacciones.",
        icon: <Wrench className="w-12 h-12 text-brand-yellow" />,
    },
    {
        title: "Sierra Cintas a Medida",
        description: "Fabricación y soldadura de sierra cintas al tamaño exacto que necesitas. Calidad y resistencia garantizada.",
        icon: <Hammer className="w-12 h-12 text-brand-yellow" />,
    },
];

export default function Services() {
    return (
        <section id="servicios" className="py-20 bg-brand-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                        Nuestros <span className="text-brand-red">Servicios</span>
                    </h2>
                    <div className="h-1 w-24 bg-brand-yellow mx-auto"></div>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                        Soluciones integrales para tu taller y obra. Calidad garantizada en cada trabajo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-brand-gray/30 border border-white/5 p-8 hover:bg-brand-gray/50 transition-colors duration-300 group"
                        >
                            <div className="mb-6 bg-brand-dark inline-block p-4 rounded-sm border border-white/10 group-hover:border-brand-yellow/50 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-brand-yellow transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
