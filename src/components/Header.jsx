import { useEffect, useState } from "react";
import logoColor from "../assets/logos/logo-horizontal-color.svg";

const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#como-trabajamos", label: "Como trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-papel/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2" data-cursor-hover>
          <img src={logoColor} alt="Soluciones EvoluteIA" className="h-8 md:h-9 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="text-[15px] font-medium text-carbon/80 hover:text-verde-ia transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          data-cursor-hover
          className="hidden md:inline-flex items-center rounded-full bg-verde-profundo text-white text-sm font-semibold px-6 py-2.5 hover:bg-verde-oscuro transition-colors"
        >
          Cuentanos tu proyecto
        </a>

        <button
          onClick={() => setOpen(!open)}
          data-cursor-hover
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
        >
          <span className={`w-6 h-0.5 bg-carbon transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-carbon transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-carbon transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-papel border-t border-menta px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-carbon"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-verde-profundo text-white text-sm font-semibold px-6 py-3"
          >
            Cuentanos tu proyecto
          </a>
        </div>
      )}
    </header>
  );
}
