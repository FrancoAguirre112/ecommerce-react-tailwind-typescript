import { useState, useCallback } from "react";
import { ProductType } from "../types";
import { productsFetch } from "../services/products";

export const useProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProducts = useCallback(
    async (page: number, search = "", category = "") => {
      try {
        setLoading(true);
        const fetchedProducts = await productsFetch(page, category);
        let filteredProducts = fetchedProducts;

        if (search) {
          const searchQuery = search.toLowerCase();
          filteredProducts = fetchedProducts.filter((product: ProductType) =>
            product.title.toLowerCase().includes(searchQuery)
          );
        }

        setProducts(filteredProducts);
        setError(null);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { products, loading, error, getProducts };
};
