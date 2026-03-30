import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// SVGs personalizados para redes sociales
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <InstagramIcon />, name: 'Instagram' },
    { icon: <FacebookIcon />, name: 'Facebook' },
    { icon: <LinkedinIcon />, name: 'LinkedIn' }
  ];

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
              Atención médica con un enfoque humano y profesional en Piedras Negras.
            </p>
            
            <div className="flex gap-5">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  aria-label={social.name}
                  whileHover={{ y: -3 }}
                  className="text-slate-400 hover:text-pink-600 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: Navegación */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900 mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-pink-600 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Sobre mí</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* COLUMNA 3: Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900 mb-6">Newsletter</h4>
            <div className="relative border-b border-slate-200">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full bg-transparent py-3 pr-10 outline-none text-sm"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-pink-500 font-bold">→</button>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-slate-400">
            © {new Date().getFullYear()} Dra. María Fernanda — Todos los derechos reservados.
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900"
          >
            Volver arriba
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-pink-500 group-hover:text-pink-500">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;