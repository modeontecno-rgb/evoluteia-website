import { motion } from "framer-motion";
import { CloudOff, Wifi, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Wifi,
    title: "Sin instalacion",
    text: "Se abre en el navegador y tambien se instala en el movil, sin tiendas de aplicaciones.",
  },
  {
    icon: Users,
    title: "Sin coste por usuario",
    text: "El precio va por empresa, plaza, local o persona atendida, nunca por trabajador.",
  },
  {
    icon: CloudOff,
    title: "Sin quedarse parado",
    text: "Los productos de campo y de mostrador siguen funcionando sin conexion.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-verde-ia uppercase tracking-widest mb-4">
              Quienes somos
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-carbon leading-tight tracking-tight">
              Un fabricante,
              <br /> veinte productos.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-gris leading-relaxed">
              Soluciones EvoluteIA S.L. desarrolla software de gestion para pymes,
              autonomos, centros sociosanitarios, hosteleria, comercio y entidades sin
              animo de lucro. Todos nuestros productos comparten la misma base: se abren
              en el navegador, no hay nada que instalar, funcionan tambien desde el movil
              y siguen trabajando cuando se cae la conexion.
            </p>
            <p className="text-lg text-gris leading-relaxed">
              Los datos se guardan en Europa y cada cliente queda separado del resto por
              el propio motor de la base de datos. No cobramos por usuario, publicamos
              los precios y actualizamos el producto de forma continua y sin coste.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-papel p-8 border border-menta hover:border-verde-ia/50 transition-colors"
            >
              <f.icon className="w-8 h-8 text-verde-ia mb-4" strokeWidth={1.6} />
              <h3 className="font-semibold text-carbon text-lg mb-2">{f.title}</h3>
              <p className="text-gris text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
