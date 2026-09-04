// Catalogo de productos de Soluciones EvoluteIA S.L.
// Contenido extraido del Portfolio de Productos y Dossier Comercial (ed. septiembre 2026).
// videoUrl: dejar vacio ("") hasta tener el video real; se puede rellenar con una URL de YouTube/Vimeo embed.

export const families = [
  { id: "salud", name: "Salud y dependencia" },
  { id: "hosteleria", name: "Hosteleria y alimentacion" },
  { id: "empresa", name: "Gestion de empresa" },
  { id: "finanzas", name: "Finanzas y contabilidad" },
  { id: "personas", name: "Personas y comunidad" },
  { id: "pantallas", name: "Pantallas y comunicacion" },
];

export const products = [
  {
    id: "gericentro",
    name: "GERICENTRO",
    family: "salud",
    tagline: "El ERP de residencias de mayores y centros de dia",
    price: "Desde 299 €/mes",
    summary:
      "Historia sociosanitaria, plan de atencion, kardex de medicacion y facturacion de plazas privadas y concertadas, en una sola herramienta pensada para el dia a dia de la planta.",
    tags: ["Residencias de mayores", "Centros de dia", "Grupos multicentro", "Plazas concertadas"],
    url: "gericentro.com",
    highlight:
      "El unico que combina kardex sin cobertura, historia clinica inalterable y certificado de ratio automatico al precio de un producto de gama media.",
    videoUrl: "",
  },
  {
    id: "ayudahome",
    name: "AYUDAHOME",
    family: "salud",
    tagline: "La ayuda a domicilio, controlada de verdad",
    price: "Desde 199 €/mes",
    summary:
      "Planificacion de rutas de las auxiliares, control de presencia en el domicilio y facturacion automatica al ayuntamiento o a la diputacion, con la app de la trabajadora incluida.",
    tags: ["Ayuda a domicilio", "Ayuntamientos", "Diputaciones", "Servicios sociales"],
    url: "ayudahome.app",
    highlight:
      "El precio va por el tamano del servicio y no por el numero de auxiliares, y el fichaje aguanta una inspeccion sin convertirse en rastreo del trabajador.",
    videoUrl: "",
  },
  {
    id: "tutelacentro",
    name: "TUTELACENTRO",
    family: "salud",
    tagline: "Viviendas tuteladas y pisos supervisados, sin pagar por centro",
    price: "Desde 199 €/mes",
    summary:
      "Gestion de entidades con muchos pisos pequenos y dispersos: planificacion centrada en la persona, apoyos, personal que rota entre viviendas y ratios exigentes.",
    tags: ["Viviendas tuteladas", "Discapacidad intelectual", "Salud mental", "Tercer sector"],
    url: "tutelacentro.com",
    highlight:
      "El precio va por las personas apoyadas en toda la entidad, no por vivienda: tener diez pisos pequenos no cuesta mas que una residencia grande.",
    videoUrl: "",
  },
  {
    id: "hostelecor",
    name: "HOSTELECOR",
    family: "hosteleria",
    tagline: "El TPV de hosteleria que se amplia con modulos",
    price: "Desde 49 €/mes",
    summary:
      "Terminal de venta para bares y restaurantes que sigue cobrando sin internet, se adapta al tipo de negocio y crece con modulos que el cliente contrata cuando los necesita.",
    tags: ["Bares y cafeterias", "Restaurantes", "Obradores", "Cadenas y franquicias"],
    url: "hostelecor.com",
    highlight:
      "Cobra sin internet, se adapta al tipo de negocio y crece con modulos contratables: el local paga solo lo que usa y nunca se queda parado.",
    videoUrl: "",
  },
  {
    id: "mercado-conectado",
    name: "MERCADO CONECTADO",
    family: "hosteleria",
    tagline: "El movil del cliente hace de buscapersonas",
    price: "Desde 390 €/mes",
    summary:
      "Avisador digital para mercados gastronomicos y food halls: el visitante pide en cualquier puesto y recibe el aviso en su movil, sin aparatos que se pierdan.",
    tags: ["Mercados gastronomicos", "Food halls", "Restauracion rapida", "Recintos feriales"],
    url: "mercado.com",
    highlight:
      "Convierte el movil del visitante en el buscapersonas, sin aparatos que reponer, y mide la espera con pedidos reales.",
    videoUrl: "",
  },
  {
    id: "lotescam",
    name: "LOTESCAM",
    family: "hosteleria",
    tagline: "El cuaderno sanitario que se rellena en la cocina",
    price: "Desde 29,90 €/mes",
    summary:
      "Registros de autocontrol sanitario y trazabilidad alimentaria: temperaturas, limpieza, recepcion de mercancia y alergenos, con el informe para el inspector en segundos.",
    tags: ["Bares y restaurantes", "Obradores", "Catering colectivo", "Carnicerias y pescaderias"],
    url: "lotescam.app",
    highlight:
      "El unico cuaderno sanitario que vive dentro del terminal de venta del local y aun asi nunca bloquea una venta.",
    videoUrl: "",
  },
  {
    id: "pidemetu",
    name: "PIDEMETU",
    family: "hosteleria",
    tagline: "El pedido del distribuidor, del catalogo a la factura",
    price: "Desde 89 €/mes",
    summary:
      "Plataforma de pedidos entre productores o distribuidores y sus clientes: catalogo con precios por cliente, reparto con ruta y albaran digital, cobro y factura.",
    tags: ["Distribuidores", "Productores y obradores", "Bodegas", "Mayoristas de fresco"],
    url: "pidemetu.com",
    highlight:
      "Lleva el pedido desde el catalogo con precios de ese cliente hasta la factura verificable, con una tarifa publica por empresa.",
    videoUrl: "",
  },
  {
    id: "evoluteia-erp",
    name: "EVOLUTEIA",
    family: "empresa",
    tagline: "El ERP y CRM de la pyme espanola, por capas",
    price: "Desde 69 €/mes",
    summary:
      "Nucleo de gestion completo: facturacion, clientes, articulos, almacenes, cobros y permisos, con un motor de facturacion certificable aislado y verticales por sector.",
    tags: ["Pymes de servicios", "Comercio y distribucion", "Instaladoras", "Talleres"],
    url: "evoluteia.com",
    highlight:
      "El motor de facturacion va aislado del resto del programa: cuando cambia la norma se toca una sola pieza y el cliente no se queda parado.",
    videoUrl: "",
  },
  {
    id: "ofigesti",
    name: "OFIGESTI",
    family: "empresa",
    tagline: "El presupuesto se dicta, se firma y se cobra en la puerta",
    price: "Desde 69 €/mes",
    summary:
      "Gestion para el autonomo de oficio: dicta el presupuesto con tres opciones, lo firma el cliente con el dedo, y se cobra alli mismo por Bizum, tarjeta o transferencia.",
    tags: ["Fontaneria", "Electricidad", "Albanileria", "Cerrajeria y carpinteria"],
    url: "ofigesti.app",
    highlight:
      "El presupuesto se dicta hablando y sale con tres opciones, y el trimestre le llega al asesor en el formato exacto de su programa.",
    videoUrl: "",
  },
  {
    id: "tallecar",
    name: "TALLECAR",
    family: "empresa",
    tagline: "El taller, y el cliente sabiendo como va su coche",
    price: "Desde 89 €/mes",
    summary:
      "Gestion de talleres de automocion con citas, ordenes de reparacion y presupuestos, mas un portal donde el cliente ve el estado de su vehiculo y aprueba sin llamar.",
    tags: ["Talleres multimarca", "Mecanica rapida", "Chapa y pintura", "Talleres de flota"],
    url: "tallecar.com",
    highlight:
      "El cliente ve como va su coche y aprueba el presupuesto desde el movil, sin registrarse, y esa aprobacion queda por escrito.",
    videoUrl: "",
  },
  {
    id: "agrogesti",
    name: "AGROGESTI",
    family: "empresa",
    tagline: "El cuaderno de campo que se rellena solo",
    price: "Desde 89 €/mes",
    summary:
      "Cuaderno de campo digital y registro de tratamientos fitosanitarios, con parcelas sobre el mapa oficial, plazos de seguridad automaticos y exportacion al sistema estatal.",
    tags: ["Explotaciones agricolas", "Cooperativas", "Olivar y vinedo", "Citricos y horticola"],
    url: "agrogesti.com",
    highlight:
      "Calcula solo el plazo de seguridad de cada tratamiento y avisa antes de recolectar; la cooperativa puede revenderlo con su propia marca.",
    videoUrl: "",
  },
  {
    id: "nivelaconta",
    name: "NIVELACONTA",
    family: "finanzas",
    tagline: "Las cuentas del negocio, claras",
    price: "Desde 59 €/mes",
    summary:
      "Control de ingresos y gastos con conciliacion bancaria, facturas, vencimientos, remesas y presupuestos, en un lenguaje que entiende cualquiera.",
    tags: ["Autonomos", "Micronegocios", "Pequeno comercio", "Comunidades y asociaciones"],
    url: "nivelaconta.app",
    highlight:
      "Trae conciliacion, remesas y coste por proyecto sin modulos aparte, funciona sin conexion y no pone limite al numero de facturas.",
    videoUrl: "",
  },
  {
    id: "micontafacil",
    name: "MICONTAFACIL",
    family: "finanzas",
    tagline: "Dinero que entra, dinero que sale",
    price: "Desde 29,90 €/mes",
    summary:
      "Contabilidad para quien no sabe contabilidad, con cuaderno compartido entre varias personas, lectura automatica de tickets con la camara y entrada de facturas por correo.",
    tags: ["Micropymes", "Comercios", "Negocios familiares", "Asociaciones"],
    url: "micontafacil.app",
    highlight:
      "Es el unico donde todos ven las mismas cuentas y queda registrado quien apunto cada movimiento, sin jerga contable.",
    videoUrl: "",
  },
  {
    id: "mioficonta",
    name: "MIOFICONTA",
    family: "finanzas",
    tagline: "Cuanto le sale a pagar y cuando",
    price: "Desde 39,90 €/mes",
    summary:
      "La contabilidad del autonomo de oficio, con los borradores de los papeles de Hacienda preparados casilla a casilla y cada cifra abierta hasta las facturas que la componen.",
    tags: ["Autonomos de oficio", "Instaladores", "Reformas", "Estimacion directa simplificada"],
    url: "mioficonta.app",
    highlight:
      "Cada cifra del borrador se abre y ensena las facturas que la componen: por eso el asesor lo recomienda en vez de temerlo.",
    videoUrl: "",
  },
  {
    id: "afilia",
    name: "AFILIA",
    family: "personas",
    tagline: "Afiliados, cuotas y carnes, con delegaciones",
    price: "Desde 99 €/mes",
    summary:
      "CRM de afiliados para sindicatos, asociaciones y colegios profesionales: fichas, cuotas domiciliadas, carnes, documentacion y delegaciones territoriales.",
    tags: ["Sindicatos", "Asociaciones y federaciones", "Colegios profesionales", "ONG"],
    url: "afilia.com",
    highlight:
      "Incluye las delegaciones territoriales sin cobrar por ellas y valida la cuenta bancaria antes de emitir la remesa.",
    videoUrl: "",
  },
  {
    id: "puntualink",
    name: "PUNTUALINK",
    family: "personas",
    tagline: "El fichaje que aguanta una inspeccion",
    price: "Desde 39,90 €/mes",
    summary:
      "Control horario con verificacion de posicion en el momento de fichar, perimetros por centro de trabajo, panel para la empresa y registro que no se puede alterar.",
    tags: ["Construccion y obra", "Limpieza", "Reparto y logistica", "Comercio con varios puntos"],
    url: "puntualink.app",
    highlight:
      "Comprueba donde se ficha sin rastrear al trabajador el resto de la jornada, y sirve desde dos personas.",
    videoUrl: "",
  },
  {
    id: "movetoclass",
    name: "MOVETOCLASS",
    family: "personas",
    tagline: "El centro deportivo montado en cinco minutos",
    price: "Desde 79 €/mes",
    summary:
      "Gestion para gimnasios, pilates, boxeo y entrenadores, con la web publica, el dominio propio y el portal del socio incluidos.",
    tags: ["Gimnasios", "Pilates y yoga", "Boxeo y artes marciales", "Entrenadores personales"],
    url: "movetoclass.app",
    highlight:
      "En cinco minutos el cliente tiene gestion, web publica, dominio propio y portal del socio funcionando.",
    videoUrl: "",
  },
  {
    id: "qsvista",
    name: "QSVISTA",
    family: "pantallas",
    tagline: "Carteleria digital y turnos, sin pagar licencia por pantalla",
    price: "Desde 6 €/pantalla/mes",
    summary:
      "Plataforma de carteleria digital con gestion de turnos y citas, con reproductor propio para Android y Windows.",
    tags: ["Retail y cadenas", "Banca y oficinas", "Farmacias y clinicas", "Administracion publica"],
    url: "qsvista.com",
    highlight:
      "El reproductor es propio, asi que no hay licencia por pantalla que pagar a nadie.",
    videoUrl: "",
  },
  {
    id: "rastrelead",
    name: "RASTRELEAD",
    family: "pantallas",
    tagline: "De la busqueda de empresas al cliente, sin salir de casa",
    price: "Desde 49,90 €/mes",
    summary:
      "Prospeccion comercial para empresas: busqueda de empresas objetivo, secuencias por correo y redes, conversaciones por mensajeria y CRM propio.",
    tags: ["Servicios profesionales", "Empresas de software", "Industria y mayoristas", "Agencias"],
    url: "rastrelead.app",
    highlight:
      "Junta en una sola herramienta lo que hoy son tres suscripciones, con control antispam integrado.",
    videoUrl: "",
  },
  {
    id: "wabox",
    name: "WABOX",
    family: "pantallas",
    tagline: "La mensajeria de empresa, bien hecha",
    price: "Desde 39 €/mes",
    summary:
      "Plataforma de mensajeria para empresas por el canal oficial: plantillas, difusiones conformes, bandeja multiagente y automatizacion, con datos en Europa.",
    tags: ["Comercio y tiendas", "Servicios y citas", "Restauracion", "Reparto y logistica"],
    url: "wabox.app",
    highlight:
      "Solo usa el canal oficial, asi que el cliente no se juega su numero, con el coste controlado en origen.",
    videoUrl: "",
  },
];
