import { memo } from 'react';
import { useProducts, useProductFilters } from '../hooks/useProducts';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import ProductFilters from './ProductFilters';
import './ProductList.css';

const ProductList = memo(() => {
  const { products, loading, error, refetch } = useProducts();
  const {
    filteredProducts,
    categories,
    filters,
    updateFilter,
    resetFilters
  } = useProductFilters(products);

  if (loading) {
    return (
      <div className="product-list-container">
        <LoadingSpinner message="Cargando productos..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-container">
        <div className="error-container">
          <h2>❌ Error al cargar productos</h2>
          <p>{error}</p>
          <button onClick={refetch} className="retry-btn">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="product-list-container">
        <div className="empty-state">
          <h2>📦 No hay productos disponibles</h2>
          <p>Por favor, verifica que el servidor esté funcionando.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>🛍️ Catálogo de Productos</h1>
        <p className="product-count">
          {filteredProducts.length} de {products.length} productos
        </p>
      </div>

      <ProductFilters
        filters={filters}
        categories={categories}
        onFilterChange={updateFilter}
        onResetFilters={resetFilters}
        resultCount={filteredProducts.length}
      />

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <h3>🔍 No se encontraron productos</h3>
          <p>Prueba ajustando los filtros de búsqueda</p>
          <button onClick={resetFilters} className="reset-filters-btn">
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      )}
    </div>
  );
});

ProductList.displayName = 'ProductList';

export default ProductList;
