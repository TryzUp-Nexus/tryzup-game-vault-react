import Icon from "../Icon/Icon.jsx";
import { formatPrice } from "../../utils/formatPrice.js";
import "./ProductCard.css";

export default function ProductCard({ product, onAdd }) {
  const discount =
    Number(product.discountPercentage) > 0
      ? `-${Math.round(product.discountPercentage)}%`
      : null;

  const productImage = product.images?.[0] || product.thumbnail;

  return (
    <article className="product-card">
      <div className="product-cover">
        {discount && <span className="cover-badge">{discount}</span>}

        <img
          src={productImage}
          alt={product.title}
          loading="lazy"
        />

        <div className="cover-code">
          PRODUCT / {String(product.id).padStart(3, "0")}
        </div>
      </div>

      <div className="product-body">
        <div className="product-meta">
          <span>{product.category}</span>

          <span className="rating">
            <Icon name="star" size={14} />
            {product.rating}
          </span>
        </div>

        <h3>{product.title}</h3>
        <p>{product.description}</p>

        <div className="product-info">
          <span>{product.brand || "Sin marca"}</span>
          <span>Stock: {product.stock}</span>
        </div>

        <div className="product-footer">
          <div>
            <small>Precio referencial API</small>
            <strong>{formatPrice(product.price)}</strong>
          </div>

          <button
            className="add-button"
            onClick={() => onAdd(product)}
            aria-label={`Agregar ${product.title} al carrito`}
          >
            <Icon name="plus" size={18} />
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}