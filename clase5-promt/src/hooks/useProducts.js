import { useState, useEffect, useCallback, useMemo } from 'react';
import { productService, ApiError } from '../services/api';

// Hook para obtener productos con estado de carga y error
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Error al cargar productos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts
  };
};

// Hook para búsqueda de productos con debounce
export const useProductSearch = (initialQuery = '') => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce para evitar demasiadas consultas
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productService.searchProducts(query);
        setResults(data);
      } catch (err) {
        setError(err instanceof ApiError ? err.message : 'Error en la búsqueda');
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300); // Esperar 300ms antes de buscar

    return () => clearTimeout(timeoutId);
  }, [query]);

  return {
    query,
    setQuery,
    results,
    loading,
    error
  };
};

// Hook para filtros de productos
export const useProductFilters = (products) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: { min: 0, max: Infinity },
    sortBy: 'name', // 'name', 'price-low', 'price-high'
    searchTerm: ''
  });

  // Obtener categorías únicas de los productos
  const categories = useMemo(() => {
    const cats = products.map(product => product.categoria);
    return [...new Set(cats)].sort();
  }, [products]);

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Filtro por categoría
      if (filters.category && product.categoria !== filters.category) {
        return false;
      }

      // Filtro por rango de precio
      if (product.precio < filters.priceRange.min || product.precio > filters.priceRange.max) {
        return false;
      }

      // Filtro por término de búsqueda
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        return product.nombre.toLowerCase().includes(searchLower) ||
               product.descripcion.toLowerCase().includes(searchLower);
      }

      return true;
    });

    // Ordenar productos
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.precio - b.precio);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.precio - a.precio);
        break;
      case 'name':
      default:
        filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
    }

    return filtered;
  }, [products, filters]);

  // Funciones para actualizar filtros
  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      category: '',
      priceRange: { min: 0, max: Infinity },
      sortBy: 'name',
      searchTerm: ''
    });
  }, []);

  return {
    filters,
    filteredProducts,
    categories,
    updateFilter,
    resetFilters
  };
};

// Hook para manejar el estado de un producto individual
export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setProduct(null);
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productService.getProductById(productId);
        setProduct(data);
      } catch (err) {
        setError(err instanceof ApiError ? err.message : 'Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return {
    product,
    loading,
    error
  };
};
