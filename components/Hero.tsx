import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-energen-dark flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
           className="w-full h-full bg-cover bg-center"
           style={{
             backgroundImage: 'url("https://storage.googleapis.com/msgsndr/W7R1X8YOEgKpF0ad1L2W/media/69308e7a7bbd8da38e0d3cfb.jpg")',
           }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-energen-dark via-energen-dark/80 to-energen-dark/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-energen-orange text-white mb-8 font-bold tracking-widest text-xs uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            <Zap size={14} fill="currentColor" />
            Líderes en Energía
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight mb-8">
            INGENIERÍA QUE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-energen-orange via-orange-400 to-yellow-400">
              IMPULSA INDUSTRIAS
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed border-l-2 border-gray-700 pl-6">
            Especialistas en <strong>Grupos Electrógenos</strong> de alto rendimiento y <strong>Maquinaria Vial</strong>. Garantizamos la continuidad operativa de su empresa con tecnología de vanguardia y soporte técnico especializado.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#catalog"
              className="group px-8 py-4 bg-white text-energen-dark font-bold text-lg transition-all hover:bg-gray-100 flex items-center justify-center gap-3 shadow-[0px_0px_20px_rgba(255,255,255,0.2)] hover:shadow-[0px_0px_30px_rgba(255,255,255,0.4)]"
            >
              Ver Grupos Electrógenos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#machinery"
              className="group px-8 py-4 border border-gray-600 text-white font-bold text-lg hover:border-energen-orange hover:text-energen-orange transition-all flex items-center justify-center"
            >
              División Maquinaria
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.3em] uppercase">Descubre Más</span>
          <ChevronDown size={24} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;