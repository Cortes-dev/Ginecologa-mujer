import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fafafa] pt-20 pb-10 px-6 lg:px-12 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* COLUMNA 1: Brand & Logo */}
          <div className="md:col-span-5">
            <div className="flex flex-col items-start mb-6">
              <span className="font-extrabold text-2xl tracking-tighter text-pink-600 uppercase">
                Dra. María Fernanda
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold mt-1">
                Ginecología y Obstetricia
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-8">
              Dedicada a ofrecer una atención médica excepcional con un enfoque humano y tecnología de vanguardia en Piedras Negras.
            </p>
            <div className="flex gap-5">
              {[<Instagram size={18}/>, <Facebook size={18}/>, <Linkedin size={18}/>].map((icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -3, textShadow: "0px 0px 8px rgb(219, 39, 119)" }}
                  className="text-slate-400 hover:text-pink-500 transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: Enlaces Rápidos */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900 mb-6">Navegación</h4>
            <ul className="space-y-4">
              {['Inicio', 'Sobre mí', 'Servicios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-slate-500 hover:text-pink-600 transition-colors flex items-center group">
                    <span className="h-[1px] w-0 bg-pink-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: Newsletter / Call to action sutil */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-6">Recibe consejos de salud y actualizaciones mensuales.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full bg-white border-b border-slate-200 py-3 pr-10 outline-none focus:border-pink-500 transition-all text-sm"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-pink-500 hover:scale-110 transition-transform">
                →
              </button>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR: Copyright & Scroll Top */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-slate-400 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Dra. María Fernanda — Todos los derechos reservados. <br className="md:hidden" />
            <span className="hidden md:inline mx-2">•</span> 
            <a href="#" className="hover:text-pink-500">Aviso de Privacidad</a>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900"
          >
            Volver arriba
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-pink-500 group-hover:text-pink-500 transition-all">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;