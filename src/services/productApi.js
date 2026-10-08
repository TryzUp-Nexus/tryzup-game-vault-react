const PRODUCTS_ENDPOINT = "https://dummyjson.com/products";

export async function getProducts() {
  const response = await fetch(PRODUCTS_ENDPOINT);

  if (!response.ok) {
    throw new Error(
      `No fue posible obtener los productos. Código HTTP: ${response.status}`,
    );
  }

  const data = await response.json();

  if (!Array.isArray(data.products)) {
    throw new Error("La API respondió con un formato de datos inesperado.");
  }

  return data.products;
}
