import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#", icon: <Home size={18} /> },
    { name: "Sobre mí", href: "#", icon: <User size={18} /> },
    { name: "Servicios", href: "#", icon: <Briefcase size={18} /> },
    { name: "Contacto", href: "#", icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            {/* Contenedor del Logo con un ligero efecto de hover */}
            <div className="relative">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* Opcional: Un pequeño destello rosa detrás del logo */}
              <div className="absolute -inset-1 bg-pink-100 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </div>

            {/* Bloque de Texto */}
            <div className="flex flex-col ml-3 leading-tight">
              <span className="font-extrabold text-lg md:text-xl tracking-tight text-pink-600 font-sans">
                Dra. María Fernanda
              </span>
              <div className="flex items-center">
                {/* Línea decorativa pequeña para darle un toque premium */}
                <span className="h-[1px] w-4 bg-pink-300 mr-2 hidden sm:block"></span>
                <span className="text-gray-500 text-xs md:text-[0.75rem] uppercase tracking-widest font-medium">
                  Ginecología y Obstetricia
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <motion.li key={item.name} whileHover={{ y: -2 }}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-pink-600 hover:bg-pink-50 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-pink-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-gray-600 hover:text-white hover:bg-pink-500 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-200"
                >
                  <span className="text-pink-400 group-hover:text-white">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
