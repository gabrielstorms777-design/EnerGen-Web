import React, { useState } from 'react';
import { Product } from '../types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MessageCircle, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola, estoy interesado en el generador ${product.name} (${product.power}) que vi en su web.`;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group flex flex-col perspective-1000"
    >
      {/* Image Container */}
      <div 
        className="relative h-64 overflow-hidden bg-white border-b border-gray-100 rounded-t-xl"
        style={{ transform: "translateZ(20px)" }}
      >
        <img 
          src={product.images[currentImageIndex]} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 transform transition-transform duration-500"
        />
        
        {/* Navigation Arrows (Only if multiple images) */}
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-energen-dark/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-energen-orange"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-energen-dark/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-energen-orange"
            >
              <ChevronRight size={20} />
            </button>
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {product.images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-energen-orange' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-4 right-4 bg-energen-dark/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-md z-10">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div 
        className="p-6 flex flex-col flex-grow bg-white rounded-b-xl"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-energen-dark font-heading leading-tight">{product.name}</h3>
          <div className="flex items-center text-energen-orange font-bold bg-orange-50 px-2 py-1 rounded shrink-0 ml-2">
            <Zap size={16} className="mr-1" />
            {product.power}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 min-h-[40px] flex-grow">{product.description}</p>
        
        {/* Features List */}
        <ul className="mb-6 space-y-2">
          {product.features.map((feat, idx) => (
            <li key={idx} className="text-xs text-gray-500 flex items-center font-medium">
              <span className="w-1.5 h-1.5 bg-energen-orange rounded-full mr-2 shrink-0"></span>
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-energen-dark hover:bg-energen-orange text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 group-hover:shadow-lg mt-auto transform hover:-translate-y-1"
        >
          <MessageCircle size={18} />
          Consultar Precio
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;