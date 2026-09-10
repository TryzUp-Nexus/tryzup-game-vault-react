# TryzUp Game Vault

Proyecto académico de una página de e-commerce simple desarrollado con React + Vite.

## Objetivo

Demostrar el uso de componentes reutilizables, props, renderizado de listas con `map()`, manejo de estado con `useState` y separación de responsabilidades.

## Componentes

- `Header`: recibe `cartCount` mediante props.
- `Hero`: presentación principal del e-commerce.
- `FilterBar`: filtro reutilizable de categorías.
- `ProductGrid`: renderiza la lista de colecciones.
- `ProductCard`: tarjeta reutilizable que recibe cada colección mediante props.
- `Benefits`: sección de apoyo visual y conceptual.
- `Footer`: cierre de la página.

## Conceptos React aplicados

- Componentes funcionales.
- Props para comunicación padre → hijo.
- `map()` con `key={collection.id}` para renderizar listas.
- `useState()` para categoría activa, carrito y notificación.
- Actualización funcional de estado: `setCartCount(prev => prev + 1)`.
- Datos separados en `src/data/collections.js`.

## Ejecutar

```bash
npm install
npm run dev
```

Luego abrir la URL indicada por Vite en el navegador.

## Build

```bash
npm run build
```
