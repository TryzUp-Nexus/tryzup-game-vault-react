import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FilterBar from './components/FilterBar.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Benefits from './components/Benefits.jsx'
import Footer from './components/Footer.jsx'
import { collections } from './data/collections.js'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [cartCount, setCartCount] = useState(0)
  const [notice, setNotice] = useState('')

  const categories = ['Todas', ...new Set(collections.map((item) => item.category))]

  const visibleCollections = useMemo(() => {
    if (activeCategory === 'Todas') return collections

    return collections.filter(
      (item) => item.category === activeCategory
    )
  }, [activeCategory])

  const handleAddToCart = (collection) => {
    setCartCount((previousCount) => previousCount + 1)
    setNotice(`${collection.name} agregado al carrito`)
    window.setTimeout(() => setNotice(''), 1800)
  }

  return (
    <div className="app-shell">
      <Header cartCount={cartCount} />

      <main>
        <Hero />

        <section className="catalog-section" id="colecciones">
          <div className="section-heading">
            <div>
              <span className="section-kicker">CATÁLOGO 2026</span>
              <h2>Colecciones destacadas</h2>
            </div>

            <p>Filtra por categoría y agrega tus favoritas al carrito.</p>
          </div>

          <FilterBar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <ProductGrid
            collections={visibleCollections}
            onAdd={handleAddToCart}
          />
        </section>

        <Benefits />
      </main>

      <Footer />

      {notice && (
        <div className="toast" role="status">
          {notice}
        </div>
      )}
    </div>
  )
}
