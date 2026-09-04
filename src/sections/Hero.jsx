import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 md:pt-52 md:pb-36 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] bg-menta rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-40 w-[28rem] h-[28rem] bg-verde-ia/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-verde-profundo bg-menta px-4 py-1.5 rounded-full mb-8"
        >
          20 productos · 6 sectores · software de gestion espanol
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-[2.6rem] leading-[1.08] md:text-7xl md:leading-[1.05] font-bold text-carbon max-w-4xl tracking-tight"
        >
          Software de gestion que resuelve
          <span className="text-verde-ia"> una cosa concreta,</span> bien.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-lg md:text-xl text-gris max-w-2xl leading-relaxed"
        >
          Fabricamos veinte aplicativos para veinte oficios: pymes, autonomos, centros
          sociosanitarios, hosteleria, comercio y entidades sociales. Sin instalacion, sin
          coste por usuario y sin quedarse parado cuando falla la conexion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contacto"
            data-cursor-hover
            className="inline-flex items-center rounded-full bg-verde-profundo text-white font-semibold px-8 py-4 hover:bg-verde-oscuro transition-colors"
          >
            Cuentame tu problema
          </a>
          <a
            href="#productos"
            data-cursor-hover
            className="inline-flex items-center rounded-full border border-carbon/15 text-carbon font-semibold px-8 py-4 hover:border-verde-ia hover:text-verde-profundo transition-colors"
          >
            Ver los 20 productos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl"
        >
          <Stat number="20" label="aplicativos" />
          <Stat number="6" label="sectores" />
          <Stat number="+60" label="ediciones" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-3xl md:text-4xl font-bold text-verde-profundo">{number}</p>
      <p className="text-sm text-gris mt-1">{label}</p>
    </div>
  );
}
