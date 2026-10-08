import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductList.css";

export default function ProductList({ products, onAdd, query = "" }) {
  if (products.length === 0) {
    return (
      <div className="empty-products">
        <span>SEARCH // 00</span>
        <h3>No encontramos productos</h3>
        <p>
          {query
            ? `No hay coincidencias para "${query}". Prueba con otro nombre.`
            : "No existen productos disponibles para mostrar."}
        </p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
