export default function FilterBar({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="filter-bar" aria-label="Filtros de colecciones">
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? 'filter active' : 'filter'}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
