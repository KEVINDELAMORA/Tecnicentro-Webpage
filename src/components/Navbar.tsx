'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#servicios', label: 'Servicios' },
        { href: '#ubicacion', label: 'Ubicación' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
                : 'bg-white border-b border-gray-200 shadow-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 md:h-24 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center group">
                            <img
                                src="/images/logo_new.png"
                                alt="Tecnicentro de Colima"
                                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'
                                    }`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-brand-dark hover:text-brand-red font-bold uppercase tracking-wider text-sm transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Contact Button & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        {/* Desktop CTA */}
                        <a
                            href="https://wa.me/523123146950"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex bg-brand-red hover:bg-red-600 text-white font-bold py-3 px-6 rounded-sm uppercase tracking-wider transition-all duration-300 btn-lift items-center gap-2 shadow-md"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Contactar</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-brand-dark hover:text-brand-red transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-7 h-7" />
                            ) : (
                                <Menu className="w-7 h-7" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-80' : 'max-h-0'
                }`}>
                <div className="bg-white border-t border-gray-100 px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-brand-dark hover:text-brand-red font-bold uppercase tracking-wider text-lg py-2 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/523123146950"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex bg-brand-red hover:bg-red-600 text-white font-bold py-4 px-6 rounded-sm uppercase tracking-wider transition-all items-center justify-center gap-2 shadow-md mt-4"
                    >
                        <Phone className="w-5 h-5" />
                        <span>Contactar</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
