import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, ShieldCheck } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Heart size={20} />, label: "Pacientes atendidas", value: "2,000+" },
    { icon: <Award size={20} />, label: "Años de experiencia", value: "12+" },
    { icon: <ShieldCheck size={20} />, label: "Certificaciones", value: "8" },
  ];

  return (
    <section className="py-24 bg-white px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LADO IZQUIERDO: Imagen con Composición */}
          <div className="lg:col-span-5 relative group">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1e3c77e?auto=format&fit=crop&q=80&w=800" 
                alt="Dra. María Fernanda" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            
            {/* Elemento Decorativo (Marco Rosa) */}
            <div className="absolute -top-6 -left-6 w-full h-full border-[1px] border-pink-200 -z-0 hidden md:block" />
            
            {/* Texto Vertical Decorativo */}
            <span className="absolute -right-12 top-1/2 -rotate-90 text-[10px] tracking-[0.5em] uppercase text-slate-300 font-bold hidden xl:block">
              Excelencia Médica • Calidez Humana
            </span>
          </div>

          {/* LADO DERECHO: Contenido */}
          <div className="lg:col-span-7 pt-8 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-pink-500 font-bold tracking-widest text-[10px] uppercase mb-4 block">
                Trayectoria Profesional
              </span>
              
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-8">
                Un enfoque humano en la <br />
                <span className="font-serif italic text-pink-600">salud de la mujer.</span>
              </h2>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg max-w-2xl">
                <p>
                  Mi misión es transformar la experiencia ginecológica en un espacio de 
                  <span className="text-slate-900 font-medium"> confianza, seguridad y respeto. </span> 
                  Entiendo que cada etapa de la vida de una mujer requiere una atención única y personalizada.
                </p>
                <p className="text-base text-slate-500">
                  Egresada con honores y certificada por los consejos de especialidad más importantes, 
                  combino la tecnología médica avanzada con una escucha activa para brindar diagnósticos precisos 
                  y tratamientos integrales.
                </p>
              </div>

              {/* Stats / Tarjetas Pequeñas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 border-t border-slate-100 pt-10">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-xl bg-pink-50/50 border border-pink-100"
                  >
                    <div className="text-pink-600 mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Firma o Call to action secundario */}
              <div className="mt-12 flex items-center gap-6">
                <div className="h-12 w-[1px] bg-slate-200" />
                <p className="text-sm italic font-serif text-slate-400">
                  "Tu bienestar no es solo mi trabajo, es mi propósito."
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;