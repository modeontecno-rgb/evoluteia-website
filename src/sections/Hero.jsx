import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden min-h-[95vh] flex items-center">
      {/* Fondo decorativo animado */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.85, 0.7]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[48rem] h-[48rem] bg-gradient-to-br from-menta to-verde-ia/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 -left-48 w-[36rem] h-[36rem] bg-gradient-to-tr from-verde-profundo/10 to-verde-ia/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 text-sm font-bold text-verde-profundo bg-gradient-to-r from-menta to-verde-ia/20 px-5 py-2 rounded-full mb-10 backdrop-blur-sm border border-verde-ia/10"
        >
          <span className="w-2 h-2 bg-verde-ia rounded-full animate-pulse" />
          20 productos · 6 sectores · software español
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[3.5rem] leading-[1.02] md:text-[6.5rem] md:leading-[0.98] lg:text-[7.5rem] font-black text-carbon max-w-6xl tracking-[-0.04em]"
        >
          Software de gestión{" "}
          <span className="bg-gradient-to-r from-verde-profundo via-verde-ia to-verde-profundo bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            que resuelve
          </span>
          <br />
          <span className="text-verde-ia">una cosa concreta,</span>
          <br />
          bien.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-xl md:text-2xl text-gris/90 max-w-3xl leading-relaxed font-medium"
        >
          Veinte aplicativos para veinte oficios. Pymes, autónomos, centros
          sociosanitarios, hostelería, comercio. Sin instalación, sin coste por usuario,
          sin quedarse parado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <a
            href="#contacto"
            data-cursor-hover
            className="group relative inline-flex items-center rounded-full bg-gradient-to-r from-verde-profundo to-verde-oscuro text-white font-bold text-lg px-10 py-5 overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-verde-ia/20"
          >
            <span className="relative z-10">Cuéntame tu problema</span>
            <div className="absolute inset-0 bg-gradient-to-r from-verde-ia to-verde-profundo opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#productos"
            data-cursor-hover
            className="inline-flex items-center rounded-full border-2 border-carbon/20 text-carbon font-bold text-lg px-10 py-5 hover:border-verde-ia hover:bg-verde-ia/5 transition-all hover:scale-105"
          >
            Ver los 20 productos →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 grid grid-cols-3 gap-12 max-w-2xl"
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
