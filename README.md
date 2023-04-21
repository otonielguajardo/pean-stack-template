# PEAN Stack (PostgreSQL + Express + Angular + Node)

PEAN es una alternativa a stacks populares de desarrollo web basados en Javascript como [MEAN](<https://en.wikipedia.org/wiki/MEAN_(solution_stack)>) (Mongo + Express + Angular + Node) y PERN (PostgreSQL + Express + React + Node).

En la raíz del proyecto ejecuta `npm run install` para instalar las dependencias de los sub-directorios.

## Development

Ejecuta `npm run dev` en la raíz del proyecto para iniciar un servidor local en _modo desarrollo_.

Esto corre un proceso que _vigila_ cambios en los archivos dentro de las carpetas `/frontend` y `/server`. Cada que se actualiza algun archivo se recompila la aplicación.

El servidor expondrá la app de Angular en `http://localhost:3000/` y las rutas de la API en `http://localhost:3000/api/`.

## Deploy

Genera el build de cada aplicación ejecutando el sigueinte comando en la raíz del proyecto `npm run build`.

Ejecuta `npm run start` para iniciar el servidor de Node.
