# Guía de aplicación del refactor

## 1. Crear rama

```bash
git checkout -b refactor/component-architecture
```

## 2. Se actualizan archivos del proyecto

`src/`, `docs/` y `README.md`.

## 3. Validar

```bash
npm run build
npm run dev
```

## 4. Revisar

```bash
git status
git diff
```

## 5. Commit

```bash
git add .
git commit -m "refactor: modularizar componentes y estilos"
```

## 6. Publicar rama

```bash
git push -u origin refactor/component-architecture
```

## Pull Request

**Título:** `refactor: modularizar arquitectura de componentes`

**Resumen:**
- Organiza cada componente en su propia carpeta.
- Separa los estilos CSS por componente.
- Divide estilos globales entre `index.css` y `App.css`.
- Extrae `formatPrice` a `src/utils/formatPrice.js`.
- Actualiza imports y documentación.
- Mantiene UI y comportamiento.

**Validación:**
- [ ] `npm run build`
- [ ] Filtros
- [ ] Botón Agregar
- [ ] Contador del carrito
- [ ] Toast
- [ ] Responsive
- [ ] GitHub Pages tras merge
