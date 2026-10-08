import Icon from "../Icon/Icon.jsx";
import "./ErrorMessage.css";

export default function ErrorMessage({ message, onRetry }) {
  return (
    <section className="error-message" role="alert">
      <span className="error-icon">
        <Icon name="wifi" size={28} />
      </span>

      <div className="error-copy">
        <span className="error-kicker">API // CONNECTION ERROR</span>
        <h3>No pudimos sincronizar el catálogo</h3>
        <p>{message}</p>

        <button type="button" onClick={onRetry}>
          <Icon name="refresh" size={17} />
          Reintentar
        </button>
      </div>
    </section>
  );
}
