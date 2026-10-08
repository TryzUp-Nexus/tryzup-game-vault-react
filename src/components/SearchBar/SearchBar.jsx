import Icon from "../Icon/Icon.jsx";
import "./SearchBar.css";

export default function SearchBar({ value, onChange, disabled = false }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="search-bar">
      <Icon name="search" size={20} className="search-icon" />

      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Buscar productos por nombre..."
        aria-label="Buscar productos por nombre"
        disabled={disabled}
      />

      {value && (
        <button
          type="button"
          className="clear-search"
          onClick={() => onChange("")}
          aria-label="Limpiar búsqueda"
        >
          <Icon name="x" size={18} />
        </button>
      )}
    </div>
  );
}
