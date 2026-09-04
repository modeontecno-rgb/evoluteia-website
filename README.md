# Web de Soluciones EvoluteIA S.L.

Web corporativa de Soluciones EvoluteIA S.L., desarrollada con React + Vite + TailwindCSS.
Incluye portfolio de los 20 productos, formulario de contacto/presupuesto y diseño
inspirado en la identidad de marca de la empresa (colores, tipografía Inter, cursor
personalizado tipo "punto que sigue al ratón").

## Requisitos previos (una sola vez por ordenador)

1. **Node.js** (versión 18 o superior): https://nodejs.org (descargar la version LTS)
2. **Git**: https://git-scm.com/downloads
3. Opcional, para editar código: **Visual Studio Code**: https://code.visualstudio.com

## Poner el proyecto en marcha

```bash
git clone <URL_DEL_REPOSITORIO>
cd evoluteia-website
npm install
npm run dev
```

Abre el navegador en la URL que indique la terminal (normalmente `http://localhost:5173`).

## Trabajar en varios ordenadores

Cada vez que empieces a trabajar en un ordenador distinto:

```bash
git pull          # trae los ultimos cambios
npm install       # solo si package.json ha cambiado
npm run dev       # arranca el servidor local
```

Cuando termines de hacer cambios:

```bash
git add .
git commit -m "Descripcion breve del cambio"
git push
```

## Estructura del proyecto

```
evoluteia-website/
├── src/
│   ├── assets/logos/       Logotipos de la marca (SVG)
│   ├── components/         Header, Footer, cursor personalizado
│   ├── sections/           Hero, Nosotros, Productos, Como trabajamos, Contacto
│   ├── data/products.js    Contenido de los 20 productos (facil de editar)
│   ├── index.css           Colores de marca, tipografia, estilos globales
│   └── App.jsx             Ensamblaje de todas las secciones
├── public/                 Favicon, iconos, fuentes Inter
└── index.html
```

### Como editar contenido habitual

- **Textos y precios de productos**: editar `src/data/products.js`.
- **Colores de marca**: editar el bloque `@theme` en `src/index.css`
  (usa los mismos valores que `colores.json` de la identidad corporativa).
- **Textos del hero / quienes somos / contacto**: editar directamente los
  archivos dentro de `src/sections/`.
- **Videos de producto**: rellenar el campo `videoUrl` de cada producto en
  `src/data/products.js` con la URL de inserción de YouTube o Vimeo
  (ej. `https://www.youtube.com/embed/ID_DEL_VIDEO`).

## Formulario de contacto

El formulario de `src/sections/Contact.jsx` está listo visualmente pero el envío
está simulado (no manda el correo todavía). Para conectarlo de verdad hay dos
opciones sencillas, sin necesidad de programar un backend:

1. **Formspree** (https://formspree.io) — gratis hasta 50 envíos/mes, solo hay
   que sustituir la función `handleSubmit` por un `fetch` a la URL que te den.
2. **EmailJS** (https://www.emailjs.com) — envía directamente a tu email desde
   el navegador, también con capa gratuita.

Cuando tengas cuenta en cualquiera de los dos, dímelo y lo conecto en la
siguiente sesión de trabajo.

## Despliegue en producción (Arsys)

Ver el archivo `INSTRUCCIONES-ARSYS.md`.

## Build de producción

```bash
npm run build
```

Esto genera la carpeta `dist/` con los archivos estáticos listos para subir
a cualquier hosting (Arsys incluido).
