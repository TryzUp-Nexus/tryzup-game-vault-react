# TryzUp Vault Store — Evolución API

## Antecedente

La versión `v1.0.0` trabajaba con datos locales.

La segunda entrega evoluciona el mismo producto para consumir información desde una API pública y conservar la organización modular incorporada después del feedback académico de la primera entrega.

## Requisitos implementados

| Requisito | Implementación |
| --- | --- |
| Productos desde API | `productApi.js` + `useProducts.js` |
| `fetch` dentro de `useEffect` | `useProducts.js` |
| Estado `products` | `useProducts.js` |
| Estado `loading` | `useProducts.js` + `Loader` |
| Estado `error` | `useProducts.js` + `ErrorMessage` |
| Búsqueda por nombre | `SearchBar` + filtrado en `App.jsx` |
| ProductCard con props | `components/ProductCard/` |
| ProductList | `components/ProductList/` |
| Responsive | CSS por componente |
| Despliegue | GitHub Actions + GitHub Pages |

## Flujo

```text
DummyJSON → productApi → useProducts → App → ProductList → ProductCard
```

## Validación recomendada

- `npm run build`
- vista desktop;
- vista mobile;
- búsqueda existente;
- búsqueda sin resultados;
- limpiar búsqueda;
- carrito;
- recarga;
- GitHub Pages.
