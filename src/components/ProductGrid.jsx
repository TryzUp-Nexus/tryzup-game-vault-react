import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ collections, onAdd }) {
  return (
    <div className="product-grid">
      {collections.map((collection) => (
        <ProductCard key={collection.id} collection={collection} onAdd={onAdd} />
      ))}
    </div>
  )
}
