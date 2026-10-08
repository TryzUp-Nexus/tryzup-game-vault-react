import Icon from "../Icon/Icon.jsx";
import tryzupLogo from "../../assets/tryzup-logo.png";
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
          <img src={tryzupLogo} alt="Logo TryzUp" />
        </span>

        <span className="brand-copy">
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