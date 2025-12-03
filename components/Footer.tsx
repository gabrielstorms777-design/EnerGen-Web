import React from 'react';
import { Facebook, Instagram, Linkedin, ChevronRight, Mail } from 'lucide-react';
import { COMPANY_LOGO_URL, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-energen-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={COMPANY_LOGO_URL} 
              alt="EnerGen Logo" 
              className="h-10 w-auto brightness-0 invert opacity-90" 
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Líderes en soluciones energéticas. Proveemos confianza y potencia para que tu proyecto nunca se detenga.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-energen-orange transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <Facebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-energen-orange transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <Instagram size={20} />
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-400 hover:text-energen-orange transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Catálogo', 'Maquinarias', 'Servicios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase() === 'inicio' ? 'hero' : (item.toLowerCase() === 'catálogo' ? 'catalog' : item.toLowerCase())}`} className="text-gray-400 hover:text-energen-orange text-sm flex items-center transition-colors group">
                    <ChevronRight size={14} className="mr-2 text-energen-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Legals */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Compromiso</h4>
            <p className="text-gray-400 text-sm mb-4">
              Trabajamos con las mejores marcas del mercado para asegurar la durabilidad y eficiencia de su inversión.
            </p>
            <div className="text-xs text-gray-500 mt-8">
              <p>&copy; {new Date().getFullYear()} EnerGen Ingeniería. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;