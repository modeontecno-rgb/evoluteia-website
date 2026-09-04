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
    <section id="como-trabajamos" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-verde-ia uppercase tracking-widest mb-4">
            Como trabajamos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-carbon tracking-tight">
            Lo que puedes esperar de nosotros.
          </h2>
          <p className="mt-5 text-lg text-gris leading-relaxed">
            Programas que resuelven bien una cosa concreta, con precio claro, que no
            cobran mas por cada persona que entra en la empresa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl bg-papel"
            >
              <item.icon className="w-6 h-6 text-verde-ia shrink-0 mt-0.5" strokeWidth={1.6} />
              <p className="text-carbon/85 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
