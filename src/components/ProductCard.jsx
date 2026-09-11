import Icon from './Icon.jsx'

const formatPrice = (value) => new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
}).format(value)

export default function ProductCard({ collection, onAdd }) {
  return (
    <article className="product-card">
      <div className={`cover cover-${collection.image}`}>
        <span className="cover-badge">{collection.badge}</span>
        <Icon name="gamepad" className="cover-icon" size={52} />
        <div className="cover-code">
          COLLECTION / {String(collection.id).padStart(2, '0')}
        </div>
      </div>

      <div className="product-body">
        <div className="product-meta">
          <span>{collection.category}</span>
          <span className="rating">
            <Icon name="star" size={14} /> {collection.rating}
          </span>
        </div>

        <h3>{collection.name}</h3>
        <p>{collection.description}</p>

        <div className="product-info">
          <span>{collection.games} juegos</span>
          <span>{collection.platform}</span>
        </div>

        <div className="product-footer">
          <div>
            <small>Precio colección</small>
            <strong>{formatPrice(collection.price)}</strong>
          </div>

          <button
            className="add-button"
            onClick={() => onAdd(collection)}
            aria-label={`Agregar ${collection.name} al carrito`}
          >
            <Icon name="plus" size={18} /> Agregar
          </button>
        </div>
      </div>
    </article>
  )
}
