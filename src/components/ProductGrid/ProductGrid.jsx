import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductGrid.css";

export default function ProductGrid({ collections, onAdd }) {
  return (
    <div className="product-grid">
      {collections.map((collection) => (
        <ProductCard
          key={collection.id}
          collection={collection}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
