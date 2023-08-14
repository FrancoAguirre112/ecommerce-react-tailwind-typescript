import { useState, useCallback } from "react";
import { ProductType } from "../types";
import { productDetailFetch } from "../services/productDetail";

export const useProductDetail = () => {
  const [product, setProduct] = useState<ProductType | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getProduct = useCallback(async (id: number) => {
    try {
      setLoading(true);
      const fetchedProduct = await productDetailFetch(id);
      setProduct(fetchedProduct);
      setError(null);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { product, loading, error, getProduct };
};
