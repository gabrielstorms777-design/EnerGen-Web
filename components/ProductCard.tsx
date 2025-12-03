import React, { useState } from 'react';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, estoy interesado en el generador ${product.name} (${product.power}) que vi en su web.`;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group flex flex-col h-full relative overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-64 bg-white border-b border-gray-100">
        <div className="w-full h-full p-6 flex items-center justify-center">
            <img 
            src={product.images[currentImageIndex]} 
            alt={product.name} 
            className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
            />
        </div>
        
        {/* Navigation Arrows (Only if multiple images) */}
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-energen-dark/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-energen-orange"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-energen-dark/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-energen-orange"
            >
              <ChevronRight size={18} />
            </button>
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {product.images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-energen-orange' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-4 right-4 bg-gray-900/90 text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider shadow-sm z-10">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-energen-dark font-heading leading-tight">{product.name}</h3>
          <div className="flex items-center text-energen-orange font-bold bg-orange-50 px-2 py-1 rounded shrink-0 ml-2 border border-orange-100">
            <Zap size={16} className="mr-1" />
            {product.power}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-5 min-h-[40px] flex-grow leading-relaxed">{product.description}</p>
        
        {/* Features List */}
        <div className="mb-6 pt-4 border-t border-gray-100">
            <ul className="space-y-2">
            {product.features.map((feat, idx) => (
                <li key={idx} className="text-xs text-gray-500 flex items-center font-medium">
                <span className="w-1.5 h-1.5 bg-energen-orange rounded-full mr-2 shrink-0"></span>
                {feat}
                </li>
            ))}
            </ul>
        </div>

        {/* CTA */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-energen-dark hover:bg-energen-orange text-white py-3.5 rounded-lg font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 mt-auto uppercase"
        >
          <MessageCircle size={18} />
          Cotizar Ahora
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;