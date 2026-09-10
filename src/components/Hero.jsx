import Icon from './Icon.jsx'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow"><Icon name="sparkle" size={15} /> Colecciones digitales</span>
        <h1>Tu próxima historia comienza en <span>Game Vault.</span></h1>
        <p>
          Colecciones de videojuegos seleccionadas por estilo de juego, listas para descubrir en una experiencia simple y profesional.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#colecciones">Explorar colecciones <Icon name="arrow" size={18} /></a>
          <span className="safe-note"><Icon name="shield" size={17} /> Compra demostrativa · Proyecto académico</span>
        </div>
      </div>

      <div className="hero-panel" aria-label="Resumen de catálogo">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="hero-card">
          <span className="hero-card-label">VAULT // 01</span>
          <strong>6</strong>
          <p>colecciones destacadas</p>
          <div className="hero-stat-row">
            <span><b>40</b> juegos</span>
            <span><b>6</b> estilos</span>
          </div>
        </div>
      </div>
    </section>
  )
}
