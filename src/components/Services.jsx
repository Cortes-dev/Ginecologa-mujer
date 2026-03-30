import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Baby, Activity, Heart, Microscope, Shield } from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      title: "Control Prenatal",
      desc: "Acompañamiento integral y monitoreo detallado para asegurar la salud de mamá y bebé en cada trimestre.",
      icon: <Baby size={32} />,
      size: "lg:col-span-8",
      color: "bg-pink-600 text-white"
    },
    {
      title: "Ginecología Estética",
      desc: "Procedimientos avanzados para mejorar la salud íntima y la confianza femenina.",
      icon: <Sparkles size={32} />,
      size: "lg:col-span-4",
      color: "bg-white border border-pink-100 text-slate-900"
    },
    {
      title: "Planificación Familiar",
      desc: "Asesoría personalizada sobre métodos anticonceptivos y salud reproductiva.",
      icon: <Shield size={32} />,
      size: "lg:col-span-4",
      color: "bg-pink-50 text-slate-900"
    },
    {
      title: "Cirugía Laparoscópica",
      desc: "Intervenciones de mínima invasión con recuperación acelerada y máxima precisión.",
      icon: <Microscope size={32} />,
      size: "lg:col-span-8",
      color: "bg-slate-900 text-white"
    }
  ];

  return (
    <section className="py-24 bg-[#fafafa] px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Cabecera de Sección */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-pink-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Especialidades</h3>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-slate-900">
              Servicios <span className="font-serif italic text-pink-600 underline decoration-pink-200 underline-offset-8">Premium</span>
            </h2>
          </motion.div>
          <p className="max-w-md text-slate-500 text-sm leading-relaxed uppercase tracking-widest border-l border-pink-200 pl-6">
            Tecnología médica de vanguardia con un enfoque profundamente humano y empático.
          </p>
        </div>

        {/* Grid Asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative group p-10 rounded-sm overflow-hidden flex flex-col justify-between min-h-[350px] transition-all duration-500 shadow-sm ${service.size} ${service.color}`}
            >
              {/* Icono e Indicador Numérico */}
              <div className="flex justify-between items-start">
                <div className={`${service.color.includes('bg-white') || service.color.includes('bg-pink-50') ? 'text-pink-600' : 'text-pink-200'} transition-transform duration-500 group-hover:scale-110`}>
                  {service.icon}
                </div>
                <span className="text-[40px] font-light opacity-10 tracking-tighter italic font-serif">0{index + 1}</span>
              </div>

              {/* Contenido */}
              <div className="mt-12">
                <h4 className="text-2xl font-bold mb-4 tracking-tight uppercase">{service.title}</h4>
                <p className={`text-sm leading-relaxed max-w-xs ${service.color.includes('text-white') ? 'opacity-80' : 'text-slate-500'}`}>
                  {service.desc}
                </p>
                
                {/* Botón sutil que aparece en Hover */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest cursor-pointer"
                >
                  Saber más <span className="h-[1px] w-8 bg-current"></span>
                </motion.div>
              </div>

              {/* Decoración sutil de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-pink-400/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Footer de sección */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-xs uppercase tracking-[0.4em]">Explora todos nuestros tratamientos especializados</p>
        </div>
      </div>
    </section>
  );
};

export default Services;