import { useState, useEffect, useCallback } from 'react';
import { productApi } from '../api/productApi';
import type { Product } from '../types';

export const useProducts = (initialSearch = '', initialCategory = '') => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [total, setTotal] = useState(0);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await productApi.getAll({ search, category });
      setProducts(res.data.data);
      setTotal(res.data.total);
    } catch (err) {
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [search, category]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  return { products, loading, error, total, search, setSearch, category, setCategory, refetch: fetchProducts };
};