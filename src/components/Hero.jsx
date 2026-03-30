import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#fafafa] pt-32 pb-16 px-6 lg:px-12 overflow-hidden">
      {/* Grid de fondo sutil */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* LADO IZQUIERDO: Títulos */}
        <div className="lg:col-span-7 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-pink-500 font-medium tracking-[0.2em] uppercase text-xs mb-6">
              Estética & Salud Integral
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-light leading-[0.9] tracking-tighter text-slate-900 mb-8">
              Cuidado <br /> 
              <span className="font-serif italic text-pink-600">consciente</span> <br />
              femenino.
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8 border-t border-slate-200 pt-8"
          >
            <p className="max-w-[320px] text-slate-500 leading-relaxed text-sm uppercase tracking-wide">
              Acompañamiento médico especializado en ginecología con un enfoque humano y actualizado.
            </p>
            <button className="group flex items-center gap-2 bg-slate-900 text-white px-8 py-5 rounded-full hover:bg-pink-600 transition-all duration-500 text-sm font-bold uppercase tracking-widest">
              Agendar ahora
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={18} />
            </button>
          </motion.div>
        </div>

        {/* LADO DERECHO: Imagen Asimétrica */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="aspect-[4/5] w-full bg-slate-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000" 
              alt="Dra. María Fernanda" 
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
            />
          </motion.div>
          
          {/* Badge de ubicación o detalle */}
          <div className="absolute -bottom-4 -right-4 bg-white p-8 hidden xl:block border border-slate-100 shadow-sm">
            <span className="block text-[40px] font-light text-pink-600 leading-none mb-1">01</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Ubicación <br/> Piedras Negras</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;