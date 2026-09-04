import logoBlanco from "../assets/logos/logo-horizontal-blanco.svg";
import { families } from "../data/products";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-carbon text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          <div>
            <img src={logoBlanco} alt="Soluciones EvoluteIA" className="h-8 w-auto mb-5" />
            <p className="text-sm leading-relaxed max-w-xs">
              Software de gestion espanol, moderno y con precio publicado, para sectores
              donde el trabajo del dia a dia todavia se lleva con programas de hace
              quince anos.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Familias de producto</h4>
            <ul className="space-y-2 text-sm">
              {families.map((f) => (
                <li key={f.id}>
                  <a href="#productos" className="hover:text-verde-ia transition-colors">
                    {f.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#nosotros" className="hover:text-verde-ia transition-colors">
                  Quienes somos
                </a>
              </li>
              <li>
                <a href="#como-trabajamos" className="hover:text-verde-ia transition-colors">
                  Como trabajamos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-verde-ia transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <span>evoluteia.com · evoluteia.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8 text-xs">
          <p>© {year} Soluciones EvoluteIA S.L. Todos los derechos reservados.</p>
          <p>Precios sin IVA. Datos alojados en Europa.</p>
        </div>
      </div>
    </footer>
  );
}
