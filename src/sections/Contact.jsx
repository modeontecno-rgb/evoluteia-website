import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { products } from "../data/products";

const initialForm = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  producto: "",
  mensaje: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      // NOTA PARA DESARROLLO: sustituir por el endpoint real (Formspree, backend propio, etc.)
      // De momento simula el envio para que el formulario sea funcional en la demo.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setSent(true);
      setForm(initialForm);
    } catch (err) {
      setError("No se ha podido enviar. Intentalo de nuevo o escribenos por correo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-verde-oscuro relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-verde-ia/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-5 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <p className="text-sm font-bold text-verde-ia uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-verde-ia" />
              Hablemos de tu problema
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Cuéntanos qué necesitas{" "}
              <span className="text-verde-ia">y te pasamos presupuesto.</span>
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
              Sin compromiso y sin llamadas insistentes. Solo lo justo para entender tu
              negocio y proponerte el aplicativo que mejor encaja.
            </p>

            <div className="mt-10 space-y-4">
              <ContactRow icon={Mail} text="info@evoluteia.com" />
              <ContactRow icon={Phone} text="Te llamamos nosotros si lo prefieres" />
              <ContactRow icon={MapPin} text="Soluciones EvoluteIA S.L. · Espana" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <CheckCircle2 className="w-14 h-14 text-verde-ia mb-4" strokeWidth={1.4} />
                  <h3 className="text-xl font-bold text-carbon">Mensaje recibido</h3>
                  <p className="text-gris mt-2 max-w-sm">
                    Gracias por escribirnos. Te contestamos en menos de 24-48h laborables
                    con una propuesta ajustada a tu caso.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    data-cursor-hover
                    className="mt-6 text-sm font-semibold text-verde-profundo underline"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Nombre"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Empresa (opcional)"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Telefono (opcional)"
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-carbon/80 mb-2 block">
                      Que producto te interesa (opcional)
                    </label>
                    <select
                      name="producto"
                      value={form.producto}
                      onChange={handleChange}
                      data-cursor-hover
                      className="w-full rounded-xl border border-menta bg-papel px-4 py-3 text-carbon focus:outline-none focus:ring-2 focus:ring-verde-ia/40 transition-shadow"
                    >
                      <option value="">No lo se todavia / que me asesoren</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} — {p.tagline}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-carbon/80 mb-2 block">
                      Cuentanos tu problematica
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Que gestionas hoy, con que herramienta y que es lo que mas te cuesta..."
                      className="w-full rounded-xl border border-menta bg-papel px-4 py-3 text-carbon placeholder:text-gris/60 focus:outline-none focus:ring-2 focus:ring-verde-ia/40 transition-shadow resize-none"
                    />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={sending}
                    data-cursor-hover
                    className="w-full inline-flex items-center justify-center rounded-full bg-verde-profundo text-white font-semibold px-8 py-4 hover:bg-verde-oscuro transition-colors disabled:opacity-60"
                  >
                    {sending ? "Enviando..." : "Pedir mi presupuesto"}
                  </button>

                  <p className="text-xs text-gris text-center pt-1">
                    Solo usamos tus datos para responder a tu consulta. Nunca los cedemos a
                    terceros.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 text-white/80">
      <Icon className="w-5 h-5 text-verde-ia shrink-0" strokeWidth={1.6} />
      <span className="text-sm">{text}</span>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="text-sm font-medium text-carbon/80 mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-menta bg-papel px-4 py-3 text-carbon focus:outline-none focus:ring-2 focus:ring-verde-ia/40 transition-shadow"
      />
    </div>
  );
}
