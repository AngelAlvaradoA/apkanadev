# AGENTS.md

## Contexto del proyecto

- Proyecto Astro 5 para `apkanadev.com/pruebas-astro/`.
- El sitio usa npm con `package-lock.json`.
- Tailwind CSS 4 esta configurado mediante `@tailwindcss/vite`.
- DaisyUI esta disponible desde `src/styles/global.css` con `@plugin "daisyui"`.
- El `site` canonico es `https://apkanadev.com` y el `base` es `/pruebas-astro/`.

## Reglas de trabajo

- Responder y documentar decisiones del proyecto en espanol.
- Los mensajes de commit deben estar solo en espanol.
- No hacer push. El usuario avisara cuando se pueda hacer push.
- Antes de revertir o tocar cambios no propios, revisar el diff y proteger el trabajo del usuario.
- Mantener cambios pequenos, claros y alineados con los patrones existentes.

## Revision visual obligatoria

Cuando se modifique cualquier pagina, header, cards, grillas, checkout o cuenta:

- Revisar mobile y desktop.
- Verificar que no haya scroll horizontal accidental.
- Confirmar que textos, botones, cards y grillas no se solapen.
- Comprobar estados responsive en 375px, 768px, 1024px y desktop amplio cuando sea posible.

## Prioridades de frontend

- Priorizar HTML semantico antes que envoltorios genericos.
- Mantener accesibilidad basica: `lang`, `viewport`, jerarquia de headings, foco visible, contraste suficiente, labels/aria cuando aplique.
- Incluir estados vacio, cargando y error en componentes o flujos que dependan de datos.
- Usar componentes DaisyUI cuando aceleren UI consistente, sin sacrificar semantica.
- Usar Tailwind para layout, spacing, responsive y ajustes puntuales.
- Evitar UI monocromatica; usar una paleta con contraste real y tokens claros.

## SEO

- Mantener `site` y `base` correctos en `astro.config.mjs`.
- Cada pagina debe definir `title`, `description` y canonical.
- Usar metadata social cuando la pagina vaya a compartirse.
- Sitemap activo mediante `@astrojs/sitemap`.
- Si crecen las paginas, crear un layout SEO reusable para evitar metadata duplicada.

## Imagenes

- Preferencia: guardar originales en `src/assets/images/` cuando sean parte del contenido del sitio.
- Usar `astro:assets` para optimizar y generar formatos modernos cuando aplique.
- Para produccion, preferir WebP como formato base por compatibilidad y buen peso.
- AVIF puede usarse para heroes o imagenes grandes si el ahorro compensa y se mantiene fallback.
- Mantener `width`, `height` o `aspect-ratio` para evitar CLS.
- Si el usuario ya optimiza imagenes, entregar WebP en calidad 75-85 suele ser una buena base; conservar original si se necesitara regenerar.

## Calidad tecnica

- Ejecutar `npm run build` antes de entregar cambios de paginas o config.
- Revisar el resultado en mobile y desktop cuando haya cambios visuales.
- No usar datos estadisticos sin fuente visible si la pagina los presenta como hechos.
