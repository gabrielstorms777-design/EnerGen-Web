import React from 'react';
import SectionTitle from './SectionTitle';
import { MACHINES, WHATSAPP_NUMBER } from '../constants';
import { ArrowUpRight, Cog, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';

const Machinery: React.FC = () => {
  return (
    <section id="machinery" className="py-24 bg-[#1a1a1a] relative overflow-hidden border-t-8 border-energen-orange">
      {/* Industrial Texture Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="text-left">
                <span className="text-energen-orange font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                    <Cog className="animate-spin-slow" size={18} />
                    División Especializada
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-white mt-4 uppercase">
                    Maquinaria <br/> <span className="text-gray-500">Vial & Agrícola</span>
                </h2>
            </div>
            <p className="text-gray-400 max-w-md mt-6 md:mt-0 text-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-gray-600 pl-4 md:pl-0 md:pr-4">
                Equipos de alto rendimiento diseñados para soportar las condiciones más exigentes del terreno. Potencia, tracción y durabilidad.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MACHINES.map((machine, index) => (
            <motion.div 
                key={machine.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative h-[500px] w-full bg-gray-900 rounded-sm overflow-hidden border border-gray-800 hover:border-energen-orange transition-colors duration-500"
            >
              {/* Image */}
              <div className="absolute inset-0 bg-gray-800">
                  <img 
                    src={machine.imageUrl} 
                    alt={machine.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="border-l-4 border-energen-orange pl-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="block text-energen-orange text-xs font-bold tracking-widest uppercase mb-1">
                        {machine.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-heading uppercase leading-none mb-4">
                        {machine.name}
                    </h3>
                  </div>
                  
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:overflow-visible transition-all duration-500">
                      <p className="text-gray-300 text-sm mb-6 mt-4 border-t border-gray-700 pt-4">
                          {machine.description}
                      </p>
                      <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Interesado en maquinaria: ${machine.name}`}
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-white font-bold bg-energen-orange/20 hover:bg-energen-orange px-6 py-3 rounded-sm transition-colors uppercase text-sm tracking-wider w-full justify-center border border-energen-orange"
                      >
                          Cotizar Equipo <ArrowUpRight size={16} />
                      </a>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA for Machinery */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 border border-gray-700 bg-gray-800/50 rounded-lg p-8 md:p-12 text-center relative overflow-hidden"
        >
             <div className="absolute -left-10 top-0 w-32 h-full bg-energen-orange/10 skew-x-12"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                <div className="bg-gray-700 p-4 rounded-full mb-6">
                    <HardHat size={32} className="text-energen-orange" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                    ¿Busca un equipo específico o repuestos?
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    Contamos con stock permanente y red de importación directa. Hable con un ingeniero vial especializado para encontrar la solución exacta para su obra.
                </p>
                <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola, necesito asesoramiento sobre maquinaria vial/agrícola.`}
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-energen-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/50 uppercase tracking-wide"
                >
                    Contactar División Vial
                    <ArrowUpRight size={20} />
                </a>
             </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Machinery;