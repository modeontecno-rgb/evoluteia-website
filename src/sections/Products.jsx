import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PlayCircle, ArrowUpRight } from "lucide-react";
import { products, families } from "../data/products";

export default function Products() {
  const [activeFamily, setActiveFamily] = useState("todos");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (activeFamily === "todos") return products;
    return products.filter((p) => p.family === activeFamily);
  }, [activeFamily]);

  return (
    <section id="productos" className="py-24 md:py-32 bg-papel">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-bold text-verde-ia uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-verde-ia" />
            Portfolio de productos
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-carbon tracking-tight leading-[1.05]">
            Veinte aplicativos para{" "}
            <span className="text-verde-ia">veinte oficios.</span>
          </h2>
          <p className="mt-7 text-xl md:text-2xl text-gris/90 leading-relaxed font-medium">
            Cada producto resuelve bien una cosa concreta. Filtra por sector y descubre el
            que encaja con tu problema.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          <FilterPill
            label="Todos"
            active={activeFamily === "todos"}
            onClick={() => setActiveFamily("todos")}
          />
          {families.map((f) => (
            <FilterPill
              key={f.id}
              label={f.name}
              active={activeFamily === f.id}
              onClick={() => setActiveFamily(f.id)}
            />
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.button
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelected(p)}
                data-cursor-hover
                className="group relative text-left rounded-3xl bg-white border border-menta hover:border-verde-ia/50 transition-all duration-500 p-8 flex flex-col h-full overflow-hidden hover:shadow-2xl hover:shadow-verde-ia/10 hover:-translate-y-2"
              >
                {/* Gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-verde-ia/0 via-menta/0 to-verde-ia/0 group-hover:from-verde-ia/5 group-hover:via-menta/30 group-hover:to-verde-ia/5 transition-all duration-700 -z-10" />
                
                <div className="flex items-start justify-between gap-3 mb-5">
                  <h3 className="font-black text-carbon text-xl tracking-tight group-hover:text-verde-profundo transition-colors">
                    {p.name}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-verde-ia shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
                <p className="text-carbon/70 text-base leading-relaxed mb-6 group-hover:text-carbon transition-colors">{p.tagline}</p>
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-menta/50 group-hover:border-verde-ia/30 transition-colors">
                  <span className="text-sm font-bold text-verde-profundo">{p.price}</span>
                  <span className="text-xs text-gris/70 group-hover:text-gris transition-colors">{p.url}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      data-cursor-hover
      className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
        active
          ? "bg-verde-profundo text-white"
          : "bg-white text-carbon/70 border border-menta hover:border-verde-ia"
      }`}
    >
      {label}
    </button>
  );
}

function ProductModal({ product, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-carbon/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10 relative"
      >
        <button
          onClick={onClose}
          data-cursor-hover
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-papel flex items-center justify-center hover:bg-menta transition-colors"
        >
          <X className="w-5 h-5 text-carbon" />
        </button>

        <span className="text-xs font-semibold text-verde-ia uppercase tracking-widest">
          {product.url}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-carbon mt-2 tracking-tight">
          {product.name}
        </h3>
        <p className="text-verde-profundo font-medium mt-1">{product.tagline}</p>

        {product.videoUrl ? (
          <div className="mt-6 aspect-video rounded-xl overflow-hidden bg-carbon">
            <iframe
              src={product.videoUrl}
              title={`Video de ${product.name}`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="mt-6 aspect-video rounded-xl bg-menta flex flex-col items-center justify-center gap-2 text-verde-profundo">
            <PlayCircle className="w-10 h-10" strokeWidth={1.3} />
            <p className="text-sm font-medium">Video de demostracion, proximamente</p>
          </div>
        )}

        <p className="mt-6 text-gris leading-relaxed">{product.summary}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-papel text-carbon/70 px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 p-5 rounded-xl bg-menta/60">
          <p className="text-sm text-verde-oscuro leading-relaxed italic">
            &ldquo;{product.highlight}&rdquo;
          </p>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-menta">
          <span className="font-bold text-verde-profundo">{product.price}</span>
          <a
            href="#contacto"
            onClick={onClose}
            data-cursor-hover
            className="inline-flex items-center rounded-full bg-verde-profundo text-white text-sm font-semibold px-6 py-3 hover:bg-verde-oscuro transition-colors"
          >
            Pedir presupuesto
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
