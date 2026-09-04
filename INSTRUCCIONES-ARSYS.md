# Desplegar la web en Arsys

Esta web es un sitio estático (HTML + CSS + JS ya compilados), así que funciona
en cualquier plan de hosting de Arsys que permita subir archivos por FTP/SFTP o
gestor de archivos. No hace falta base de datos ni PHP.

## Paso 1. Generar los archivos de producción

En tu ordenador, dentro de la carpeta del proyecto:

```bash
npm install
npm run build
```

Esto crea una carpeta `dist/` con todo lo necesario (index.html, css, js,
imágenes, favicon).

## Paso 2. Subir los archivos a Arsys

1. Entra en el panel de control de Arsys de tu hosting.
2. Abre el **Gestor de archivos** o conéctate por **FTP/SFTP** (con
   FileZilla, por ejemplo) usando los datos de acceso que te da Arsys.
3. Ve a la carpeta pública del hosting (normalmente se llama `www`,
   `public_html` o `htdocs`).
4. Sube **todo el contenido** de la carpeta `dist/` (no la carpeta en sí,
   sino los archivos que hay dentro) a esa carpeta pública.

## Paso 3. Apuntar los dominios

En el panel de dominios de Arsys:

1. Asocia `evoluteia.com` y `evoluteia.es` al hosting donde has subido los
   archivos (esto se hace normalmente desde "Dominios" → "Gestionar DNS" o
   "Asociar hosting").
2. Si quieres que `evoluteia.es` redirija automáticamente a `evoluteia.com`
   (o al revés), Arsys permite configurar una redirección 301 desde el panel
   de gestión de dominios, sin tocar código.
3. Activa el **certificado SSL gratuito** de Arsys para que la web cargue
   como `https://` (aparece como opción en el propio panel de hosting).

## Paso 4. Comprobar

Espera unos minutos a que se propague el DNS (puede tardar hasta 24h la
primera vez) y entra en `https://evoluteia.com` para comprobar que carga
correctamente.

## Cada vez que actualices la web

1. Haz los cambios en el código.
2. Ejecuta `npm run build` de nuevo.
3. Vuelve a subir el contenido de `dist/` por FTP, sobrescribiendo los
   archivos anteriores.

## Alternativa más cómoda (opcional, para el futuro)

Si en algún momento quieres automatizar este último paso (que se suba solo
cada vez que se guarda un cambio en GitHub), se puede configurar un flujo de
"despliegue automático" con GitHub Actions que suba por FTP a Arsys en cada
`git push`. Es un añadido opcional que se puede montar en una sesión de
trabajo posterior si te interesa.
