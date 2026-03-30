import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* LADO IZQUIERDO: Información y Estética */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-pink-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Contacto</h3>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                Estamos para <br />
                <span className="font-serif italic text-pink-600">escucharte.</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-md leading-relaxed mb-12">
                Resuelve tus dudas o agenda una cita directamente. Tu privacidad y comodidad son nuestra prioridad.
              </p>

              {/* Datos de contacto con diseño minimalista */}
              <div className="space-y-8">
                {[
                  { icon: <MapPin size={20} />, title: "Ubicación", content: "Av. Medicina 123, Piedras Negras, Coah." },
                  { icon: <Phone size={20} />, title: "Teléfono", content: "+52 (878) 123 4567" },
                  { icon: <Mail size={20} />, title: "Email", content: "hola@dramariafernanda.com" },
                  { icon: <Clock size={20} />, title: "Horarios", content: "Lun - Vie: 9:00 - 19:00" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 text-pink-400 group-hover:text-pink-600 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">{item.title}</h4>
                      <p className="text-slate-800 font-medium">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes Sociales sutiles */}
            <div className="mt-16 flex items-center gap-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-300">Siguenos —</span>
              {['Instagram', 'Facebook', 'LinkedIn'].map((link) => (
                <a key={link} href="#" className="text-xs font-bold text-slate-400 hover:text-pink-600 transition-colors uppercase tracking-tighter">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* LADO DERECHO: Formulario en tarjeta */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#fafafa] p-8 md:p-12 rounded-sm border border-slate-100 shadow-sm relative overflow-hidden"
          >
            {/* Decoración de fondo del form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl -mr-32 -mt-32" />

            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Nombre Completo</label>
                  <input type="text" placeholder="Ej. Ana García" className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-pink-500 transition-all rounded-sm text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">WhatsApp / Tel</label>
                  <input type="tel" placeholder="878 000 0000" className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-pink-500 transition-all rounded-sm text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Servicio de interés</label>
                <select className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-pink-500 transition-all rounded-sm text-sm appearance-none cursor-pointer text-slate-500">
                  <option>Control Prenatal</option>
                  <option>Ginecología Estética</option>
                  <option>Consulta General</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Mensaje</label>
                <textarea rows="4" placeholder="¿Cómo podemos ayudarte?" className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-pink-500 transition-all rounded-sm text-sm resize-none"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 text-white py-5 rounded-sm font-bold uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 hover:bg-pink-600 transition-all duration-500 shadow-xl shadow-slate-200"
              >
                Enviar Solicitud
                <Send size={14} className="opacity-70" />
              </motion.button>
              
              <p className="text-center text-[10px] text-slate-400 uppercase tracking-tight">
                Respondemos en menos de 24 horas hábiles.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;