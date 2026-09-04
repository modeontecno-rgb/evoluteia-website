import { motion } from "framer-motion";
import { FlaskConical, Rocket, GraduationCap, RefreshCw, Database, HeartHandshake } from "lucide-react";

const ITEMS = [
  { icon: FlaskConical, text: "Prueba antes de decidir, con datos de ejemplo ya cargados." },
  { icon: Rocket, text: "Puesta en marcha de un dia a tres semanas, migracion incluida." },
  { icon: GraduationCap, text: "Formacion en una sesion. Pantallas pensadas para no leer un manual." },
  { icon: RefreshCw, text: "Actualizacion continua incluida: no se pagan versiones nuevas." },
  { icon: Database, text: "Los datos son del cliente y se exportan en cualquier momento." },
  { icon: HeartHandshake, text: "Soporte directo del fabricante, sin cadena de intermediarios." },
];

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="py-20 md:py-32 lg:py-40 bg-gradient-to-b from-white to-papel relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 left-0 w-[32rem] h-[32rem] bg-gradient-to-tr from-verde-ia/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-sm font-bold text-verde-ia uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-verde-ia" />
            Cómo trabajamos
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-carbon tracking-tight leading-[1.05]">
            Lo que puedes{" "}
            <span className="text-verde-ia">esperar</span> de nosotros.
          </h2>
          <p className="mt-7 text-xl md:text-2xl text-gris/90 leading-relaxed font-medium">
            Programas que resuelven bien una cosa concreta, con precio claro, sin cobrar
            más por cada persona.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex gap-5 p-8 rounded-3xl bg-white border border-menta hover:border-verde-ia/40 transition-all duration-500 hover:shadow-xl hover:shadow-verde-ia/5 hover:-translate-y-1"
            >
              <item.icon className="w-7 h-7 text-verde-ia shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.8} />
              <p className="text-carbon/80 text-base leading-relaxed group-hover:text-carbon transition-colors">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
