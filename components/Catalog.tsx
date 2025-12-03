import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { GENERATORS } from '../constants';
import { ProductCategory } from '../types';
import ProductCard from './ProductCard';
import { AnimatePresence, motion } from 'framer-motion';
import { Filter } from 'lucide-react';

const Catalog: React.FC = () => {
  const [filter, setFilter] = useState<ProductCategory | 'ALL'>('ALL');

  const categories: { label: string; value: ProductCategory | 'ALL'; desc: string }[] = [
    { label: 'Todos los Equipos', value: 'ALL', desc: 'Visualiza nuestra gama completa' },
    { label: 'Hogar / Residencial', value: 'HOGAR', desc: 'Silencio y confort para su familia' },
    { label: 'Comercial / Pymes', value: 'COMERCIO', desc: 'Continuidad para su negocio' },
    { label: 'Industrial / Obras', value: 'INDUSTRIA', desc: 'Potencia bruta para alta demanda' },
  ];

  const filteredProducts = filter === 'ALL' 
    ? GENERATORS 
    : GENERATORS.filter(p => p.category === filter);

  return (
    <section id="catalog" className="py-24 bg-gray-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Grupos Electrógenos" 
          subtitle="Catálogo Especializado" 
        />

        {/* Professional Filter Bar */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 border-b border-gray-200 pb-4">
             <div>
               <h3 className="text-xl font-bold text-energen-dark flex items-center gap-2">
                 <Filter size={20} className="text-energen-orange" />
                 Filtrar por Sector
               </h3>
               <p className="text-gray-500 text-sm mt-1">Seleccione la categoría según su necesidad energética.</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`text-left p-4 rounded-lg border-2 transition-all duration-300 group ${
                  filter === cat.value
                    ? 'border-energen-orange bg-white shadow-lg'
                    : 'border-transparent bg-gray-100 hover:bg-white hover:border-gray-200'
                }`}
              >
                <span className={`block font-bold uppercase text-sm tracking-wider mb-1 ${filter === cat.value ? 'text-energen-orange' : 'text-gray-700'}`}>
                  {cat.label}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-gray-700">
                  {cat.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-lg shadow-inner">
            <p className="text-gray-500 text-lg">No se encontraron equipos en esta categoría momentáneamente.</p>
          </div>
        )}
        
        {/* Banner de Asesoramiento */}
        <div className="mt-16 bg-energen-dark rounded-xl p-8 md:p-12 text-center text-white relative overflow-hidden group">
           <div className="absolute inset-0 bg-energen-orange opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
           <h3 className="text-2xl font-bold mb-4 relative z-10">¿No está seguro de qué potencia necesita?</h3>
           <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
             Nuestros ingenieros pueden realizar un cálculo de carga gratuito para asegurar que su inversión sea la correcta.
           </p>
           <a 
             href="#contact" 
             className="inline-block bg-white text-energen-dark hover:bg-energen-orange hover:text-white font-bold py-3 px-8 rounded-full transition-colors relative z-10"
           >
             Solicitar Asesoramiento Técnico
           </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;