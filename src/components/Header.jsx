import Icon from './Icon.jsx'

export default function Header({ cartCount }) {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="TryzUp Game Vault - Inicio">
        <span className="brand-mark"><Icon name="gamepad" size={22} /></span>
        <span>
          <strong>TRYZUP</strong>
          <small>GAME VAULT</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#colecciones">Colecciones</a>
        <a href="#ventajas">Beneficios</a>
      </nav>

      <button className="cart-button" aria-label={`Carrito con ${cartCount} productos`}>
        <Icon name="bag" size={19} />
        <span>Carrito</span>
        <strong>{cartCount}</strong>
      </button>
    </header>
  )
}
