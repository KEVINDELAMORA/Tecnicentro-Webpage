import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-brand-dark border-b border-brand-gray/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex flex-col">
                            <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
                                TECNICENTRO
                            </span>
                            <span className="text-xs font-bold text-brand-red tracking-widest uppercase">
                                DE COLIMA
                            </span>
                        </Link>
                    </div>

                    {/* Contact Button */}
                    <div className="flex items-center">
                        <a
                            href="https://wa.me/523123146950"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wider transition-colors duration-200 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span className="hidden sm:inline">Contactar</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
