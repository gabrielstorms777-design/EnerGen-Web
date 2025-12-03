import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-energen-orange/10 text-energen-orange px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              Nuestra Esencia
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-energen-dark leading-tight mb-6">
              Más que proveedores, <br/>
              <span className="text-energen-orange">Socios Estratégicos.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En <span className="font-bold text-energen-dark">EnerGen Ingeniería</span>, entendemos que la energía no es solo un recurso, es el pulso vital de su proyecto. Con años de trayectoria en el mercado, nos hemos consolidado como referentes en soluciones de generación eléctrica y maquinaria pesada.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              No ofrecemos productos estandarizados; analizamos su necesidad específica —ya sea una residencia, una planta industrial o una obra vial— y desplegamos nuestra capacidad de ingeniería para garantizar <strong>continuidad operativa, robustez y eficiencia</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-energen-dark p-3 rounded-lg text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-energen-dark">Garantía Total</h4>
                  <p className="text-sm text-gray-500">Respaldo post-venta asegurado.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-energen-dark p-3 rounded-lg text-white">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-energen-dark">Eficiencia</h4>
                  <p className="text-sm text-gray-500">Tecnología de bajo consumo.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1000" 
                alt="Ingenieros trabajando" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg border-l-4 border-energen-orange pl-4">
                  "La ingeniería robusta es nuestra firma en cada proyecto."
                </p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 w-full h-full border-4 border-energen-orange/20 rounded-2xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;