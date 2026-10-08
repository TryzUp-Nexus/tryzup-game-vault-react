import Icon from "../Icon/Icon.jsx";
import "./Header.css";

export default function Header({ cartCount }) {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#inicio"
        aria-label="TryzUp Vault Store - Inicio"
      >
        <span className="brand-mark">
          <Icon name="boxes" size={21} />
        </span>

        <span>
          <strong>TRYZUP</strong>
          <small>VAULT STORE</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#colecciones">Productos</a>
        <a href="#ventajas">Beneficios</a>
      </nav>

      <button
        className="cart-button"
        aria-label={`Carrito con ${cartCount} productos`}
      >
        <Icon name="bag" size={19} />
        <span>Carrito</span>
        <strong>{cartCount}</strong>
      </button>
    </header>
  );
}
