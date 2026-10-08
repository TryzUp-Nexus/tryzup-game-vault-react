import Icon from "../Icon/Icon.jsx";
import "./Hero.css";

export default function Hero({ productCount = 0, loading = false }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow">
          <Icon name="sparkle" size={15} />
          Catálogo conectado por API
        </span>

        <h1>
          Descubre productos en <span>Vault Store.</span>
        </h1>

        <p>
          Una evolución de TryzUp Game Vault: ahora el catálogo se obtiene
          dinámicamente desde DummyJSON, con búsqueda, estados de carga y
          manejo de errores en React.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#colecciones">
            Explorar catálogo
            <Icon name="arrow" size={18} />
          </a>

          <span className="safe-note">
            <Icon name="shield" size={17} />
            API pública · Proyecto académico
          </span>
        </div>
      </div>

      <div className="hero-panel" aria-label="Estado del catálogo conectado">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>

        <div className="hero-card">
          <span className="hero-card-label">API // ONLINE</span>

          <strong>{loading ? "..." : productCount}</strong>
          <p>productos sincronizados</p>

          <div className="hero-stat-row">
            <span>
              <b>REST</b>
              DummyJSON
            </span>

            <span>
              <b>React</b>
              useEffect
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
