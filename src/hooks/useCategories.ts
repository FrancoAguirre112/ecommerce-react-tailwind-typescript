import { useState, useCallback } from "react";
import { categoriesFetch } from "../services/categories";

export const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCategories = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedCategories = await categoriesFetch();
      setCategories(fetchedCategories);
      setError(null);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { categories, loading, error, getCategories};
};
