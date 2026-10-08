import { useEffect, useState } from "react";
import { getProducts } from "../services/productApi.js";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const apiProducts = await getProducts();

        if (isMounted) {
          setProducts(apiProducts);
        }
      } catch (requestError) {
        if (isMounted) {
          setProducts([]);
          setError(
            requestError.message ||
              "Ocurrió un error inesperado al consultar la API.",
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, [reloadKey]);

  const reload = () => {
    setReloadKey((previousKey) => previousKey + 1);
  };

  return { products, loading, error, reload };
}
