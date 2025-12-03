import React from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contáctanos" subtitle="Estamos para asesorarte" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="bg-energen-dark text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             {/* Decorative circle */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-energen-orange rounded-full opacity-20 blur-3xl"></div>

            <h3 className="text-2xl font-bold mb-8 font-heading">Información de Contacto</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Phone className="text-energen-orange" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Ventas y Asesoramiento</p>
                  <p className="font-medium text-lg">+54 9 3755 274157</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Mail className="text-energen-orange" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="font-medium text-lg hover:text-energen-orange transition-colors">
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <MapPin className="text-energen-orange" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Ubicación</p>
                  <p className="font-medium text-lg">Oberá, Misiones, Argentina</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Clock className="text-energen-orange" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Horario de Atención</p>
                  <p className="font-medium text-lg">Lun a Vie: 8:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="block w-full text-center bg-energen-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg"
              >
                HABLAR POR WHATSAPP
              </a>
            </div>
          </div>

          {/* Map / Image placeholder */}
          <div className="bg-white rounded-2xl shadow-lg p-2 h-full min-h-[400px] overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.0!2d-55.1!3d-27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMwJzAwLjAiUyA1NcKwMDYnMDAuMCJX!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem', minHeight: '100%' }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Mapa Ubicación"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;