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
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-verde-ia uppercase tracking-widest mb-4">
            Portfolio de productos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-carbon tracking-tight">
            Veinte aplicativos para veinte oficios.
          </h2>
          <p className="mt-5 text-lg text-gris leading-relaxed">
            Cada producto resuelve bien una cosa concreta. Filtra por sector y entra en el
            que se parezca a tu problema.
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
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelected(p)}
                data-cursor-hover
                className="text-left rounded-2xl bg-white border border-menta hover:border-verde-ia hover:shadow-lg hover:shadow-verde-ia/5 transition-all p-7 flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-bold text-carbon text-lg tracking-tight">{p.name}</h3>
                  <ArrowUpRight className="w-5 h-5 text-verde-ia shrink-0" />
                </div>
                <p className="text-carbon/80 text-sm leading-relaxed mb-5">{p.tagline}</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-menta">
                  <span className="text-xs font-semibold text-verde-profundo">{p.price}</span>
                  <span className="text-xs text-gris">{p.url}</span>
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
