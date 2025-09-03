import { memo } from 'react';
import './ProductFilters.css';

const ProductFilters = memo(({
  filters,
  categories,
  onFilterChange,
  onResetFilters,
  resultCount
}) => {
  const handleCategoryChange = (e) => {
    onFilterChange('category', e.target.value);
  };

  const handleSortChange = (e) => {
    onFilterChange('sortBy', e.target.value);
  };

  const handleSearchChange = (e) => {
    onFilterChange('searchTerm', e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    const value = e.target.value;
    let priceRange = { min: 0, max: Infinity };
    
    switch (value) {
      case 'under-100':
        priceRange = { min: 0, max: 100 };
        break;
      case '100-500':
        priceRange = { min: 100, max: 500 };
        break;
      case '500-1000':
        priceRange = { min: 500, max: 1000 };
        break;
      case 'over-1000':
        priceRange = { min: 1000, max: Infinity };
        break;
      default:
        priceRange = { min: 0, max: Infinity };
    }
    
    onFilterChange('priceRange', priceRange);
  };

  const hasActiveFilters = filters.category || 
    filters.searchTerm || 
    filters.priceRange.min > 0 || 
    filters.priceRange.max < Infinity ||
    filters.sortBy !== 'name';

  return (
    <div className="product-filters">
      <div className="filters-header">
        <h3>🔍 Filtros y búsqueda</h3>
        {hasActiveFilters && (
          <button onClick={onResetFilters} className="clear-filters-btn">
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="filters-grid">
        {/* Búsqueda por texto */}
        <div className="filter-group">
          <label htmlFor="search-input">Buscar productos:</label>
          <input
            id="search-input"
            type="text"
            placeholder="Nombre o descripción..."
            value={filters.searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {/* Filtro por categoría */}
        <div className="filter-group">
          <label htmlFor="category-select">Categoría:</label>
          <select
            id="category-select"
            value={filters.category}
            onChange={handleCategoryChange}
            className="filter-select"
          >
            <option value="">Todas las categorías</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por rango de precio */}
        <div className="filter-group">
          <label htmlFor="price-select">Rango de precio:</label>
          <select
            id="price-select"
            onChange={handlePriceRangeChange}
            className="filter-select"
          >
            <option value="">Todos los precios</option>
            <option value="under-100">Menos de $100</option>
            <option value="100-500">$100 - $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="over-1000">Más de $1000</option>
          </select>
        </div>

        {/* Ordenamiento */}
        <div className="filter-group">
          <label htmlFor="sort-select">Ordenar por:</label>
          <select
            id="sort-select"
            value={filters.sortBy}
            onChange={handleSortChange}
            className="filter-select"
          >
            <option value="name">Nombre (A-Z)</option>
            <option value="price-low">Precio (menor a mayor)</option>
            <option value="price-high">Precio (mayor a menor)</option>
          </select>
        </div>
      </div>

      {/* Resultados */}
      <div className="results-info">
        <span className="results-count">
          {resultCount} {resultCount === 1 ? 'producto encontrado' : 'productos encontrados'}
        </span>
        {hasActiveFilters && (
          <span className="active-filters-indicator">
            • Filtros activos
          </span>
        )}
      </div>
    </div>
  );
});

ProductFilters.displayName = 'ProductFilters';

export default ProductFilters;
