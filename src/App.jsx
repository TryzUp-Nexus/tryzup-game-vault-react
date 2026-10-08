import { useMemo, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import Benefits from "./components/Benefits/Benefits.jsx";
import Footer from "./components/Footer/Footer.jsx";
import useProducts from "./hooks/useProducts.js";
import "./App.css";

export default function App() {
  const { products, loading, error, reload } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return products;
    }

    return products.filter((product) =>
      product.title.toLowerCase().includes(normalizedSearch),
    );
  }, [products, searchTerm]);

  const handleAddToCart = (product) => {
    setCartCount((previousCount) => previousCount + 1);
    setNotice(`${product.title} agregado al carrito`);
    window.setTimeout(() => setNotice(""), 1800);
  };

  return (
    <div className="app-shell">
      <Header cartCount={cartCount} />

      <main>
        <Hero
          productCount={products.length}
          loading={loading}
        />

        <section className="catalog-section" id="colecciones">
          <div className="section-heading">
            <div>
              <span className="section-kicker">API CATALOG // 2026</span>
              <h2>Productos conectados</h2>
            </div>

            <p>
              Busca productos por nombre dentro del catálogo recibido desde
              DummyJSON.
            </p>
          </div>

          <div className="catalog-tools">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              disabled={loading}
            />

            <div className="catalog-status">
              <span>Fuente: DummyJSON</span>

              {!loading && !error && (
                <strong>
                  {filteredProducts.length} de {products.length} visibles
                </strong>
              )}
            </div>
          </div>

          {loading && <Loader />}

          {!loading && error && (
            <ErrorMessage
              message={error}
              onRetry={reload}
            />
          )}

          {!loading && !error && (
            <ProductList
              products={filteredProducts}
              onAdd={handleAddToCart}
              query={searchTerm}
            />
          )}
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
  );
}
