# Refactor de arquitectura de componentes

## Contexto

Luego de la revisión académica se identificaron oportunidades de mejora relacionadas con la organización del código, la mantenibilidad de estilos y la reutilización de funciones.

El objetivo del refactor es aplicar esas recomendaciones sin modificar el comportamiento ni el diseño visual del proyecto.

## Cambios realizados

### Un directorio por componente

Cada componente vive ahora en su propia carpeta dentro de `src/components/`, facilitando el trabajo colaborativo y reduciendo conflictos.

### Estilos separados

El antiguo `src/styles.css` fue dividido entre `src/index.css`, `src/App.css` y los archivos CSS propios de cada componente.

### Utilidad de precio

`formatPrice` fue extraída desde `ProductCard.jsx` hacia `src/utils/formatPrice.js`. Al ser un proyecto JavaScript se mantiene extensión `.js`; en una futura migración a TypeScript podría pasar a `.ts`.

## Resultado

Se mantienen la misma UI, filtros, carrito, catálogo y despliegue, mejorando separación de responsabilidades, escalabilidad, mantenibilidad y reutilización.

## Validación

```bash
npm run build
```

También se recomienda probar filtros, carrito, notificación, responsive y GitHub Pages.
