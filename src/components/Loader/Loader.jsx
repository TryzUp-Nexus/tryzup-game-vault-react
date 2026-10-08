import "./Loader.css";

const skeletonItems = Array.from({ length: 6 }, (_, index) => index);

export default function Loader() {
  return (
    <div className="loader-wrapper" role="status" aria-live="polite">
      <div className="loader-heading">
        <span className="loader-pulse"></span>

        <div>
          <strong>Sincronizando catálogo</strong>
          <p>Conectando con DummyJSON...</p>
        </div>
      </div>

      <div className="loader-grid" aria-hidden="true">
        {skeletonItems.map((item) => (
          <div className="skeleton-card" key={item}>
            <div className="skeleton-image"></div>
            <div className="skeleton-line skeleton-line-short"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
