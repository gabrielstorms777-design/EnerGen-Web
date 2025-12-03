import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_LOGO_URL, WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Catálogo', href: '#catalog' },
    { name: 'Maquinarias', href: '#machinery' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-energen-dark/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              className="h-12 w-auto object-contain bg-white/5 rounded-md p-1 backdrop-blur-sm hover:bg-white/10 transition-colors" 
              src={COMPANY_LOGO_URL} 
              alt="EnerGen Logo" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-energen-orange px-3 py-2 rounded-md text-sm font-bold font-heading tracking-wide transition-colors uppercase relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-energen-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
             <a 
               href={`https://wa.me/${WHATSAPP_NUMBER}`}
               target="_blank"
               rel="noreferrer"
               className="bg-energen-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-sm font-bold flex items-center gap-2 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
             >
                <Phone size={18} fill="currentColor" />
                <span>CONSULTAR</span>
             </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-energen-gray inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-energen-dark border-t border-gray-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-energen-orange block px-3 py-2 rounded-md text-base font-bold font-heading uppercase"
              >
                {link.name}
              </a>
            ))}
             <a 
               href={`https://wa.me/${WHATSAPP_NUMBER}`}
               target="_blank"
               rel="noreferrer"
               className="text-white bg-energen-orange block px-3 py-3 rounded-sm text-base font-bold mt-4 text-center uppercase"
             >
                Contactar Ventas
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;