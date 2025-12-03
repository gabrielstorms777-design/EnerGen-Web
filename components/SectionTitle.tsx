import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle: string;
  light?: boolean;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, light = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="text-energen-orange font-bold uppercase tracking-widest text-sm">
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-5xl font-heading font-bold mt-2 ${light ? 'text-white' : 'text-energen-dark'}`}>
        {title}
      </h2>
      <div className="w-24 h-1 bg-energen-orange mx-auto mt-6 rounded-full"></div>
    </motion.div>
  );
};

export default SectionTitle;