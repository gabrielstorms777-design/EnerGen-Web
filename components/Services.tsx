import React from 'react';
import SectionTitle from './SectionTitle';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Servicio Integral 360°" 
          subtitle="¿Por qué elegir EnerGen?" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Activity;

            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-100 relative overflow-hidden"
              >
                {/* Hover Effect Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-energen-orange/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                    <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center text-energen-dark mb-6 group-hover:bg-energen-orange group-hover:text-white transition-colors duration-300 rotate-0 group-hover:rotate-6">
                    <IconComponent size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-energen-dark mb-4 font-heading group-hover:translate-x-1 transition-transform">
                    {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                    </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;