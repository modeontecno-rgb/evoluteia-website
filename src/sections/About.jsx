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
    <section id="nosotros" className="py-20 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-menta/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-bold text-verde-ia uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-verde-ia" />
              Quiénes somos
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-carbon leading-[1.05] tracking-tight">
              Un fabricante,
              <br />
              <span className="text-verde-ia">veinte productos.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-7"
          >
            <p className="text-xl md:text-2xl text-gris/90 leading-relaxed font-medium">
              Desarrollamos software de gestión para pymes, autónomos, centros
              sociosanitarios, hostelería, comercio y entidades sin ánimo de lucro.
            </p>
            <p className="text-lg md:text-xl text-gris leading-relaxed">
              Todos nuestros productos se abren en el navegador, funcionan desde el móvil
              y siguen trabajando cuando se cae la conexión. Los datos en Europa, sin
              cobrarte por usuario, con precio público y actualizaciones continuas sin coste.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl bg-gradient-to-br from-papel to-white p-8 md:p-10 border border-menta hover:border-verde-ia/40 transition-all duration-500 hover:shadow-xl hover:shadow-verde-ia/5 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-verde-ia/0 to-verde-ia/0 group-hover:from-verde-ia/5 group-hover:to-menta/20 rounded-3xl transition-all duration-700 -z-10" />
              <f.icon className="w-10 h-10 text-verde-ia mb-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.8} />
              <h3 className="font-bold text-carbon text-xl mb-3 group-hover:text-verde-profundo transition-colors">{f.title}</h3>
              <p className="text-gris/80 text-base leading-relaxed group-hover:text-gris transition-colors">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
