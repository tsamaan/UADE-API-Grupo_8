import { memo, useState } from 'react';
import { useProductSearch } from '../hooks/useProducts';
import './Header.css';

const Header = memo(({ onProductSelect }) => {
  const [showSearch, setShowSearch] = useState(false);
  const { query, setQuery, results, loading } = useProductSearch();

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setQuery('');
    }
  };

  const handleProductClick = (product) => {
    onProductSelect?.(product);
    setShowSearch(false);
    setQuery('');
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-main">
          <h1>🛍️ MercadoLibre Clone</h1>
          <p>Laboratorio de React con Carrito de Compras</p>
        </div>
        
        <div className="header-search">
          <button 
            className="search-toggle"
            onClick={handleSearchToggle}
            aria-label="Buscar productos"
          >
            🔍 Buscar
          </button>
          
          {showSearch && (
            <div className="search-dropdown">
              <div className="search-input-container">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="global-search-input"
                  autoFocus
                />
                <button 
                  className="search-close"
                  onClick={handleSearchToggle}
                >
                  ✕
                </button>
              </div>
              
              {loading && (
                <div className="search-loading">
                  <span>Buscando...</span>
                </div>
              )}
              
              {query && !loading && results.length > 0 && (
                <div className="search-results">
                  {results.slice(0, 5).map(product => (
                    <div 
                      key={product.id}
                      className="search-result-item"
                      onClick={() => handleProductClick(product)}
                    >
                      <img 
                        src={product.imagen} 
                        alt={product.nombre}
                        className="search-result-image"
                      />
                      <div className="search-result-info">
                        <h4>{product.nombre}</h4>
                        <p>{new Intl.NumberFormat('es-AR', {
                          style: 'currency',
                          currency: 'ARS'
                        }).format(product.precio)}</p>
                      </div>
                    </div>
                  ))}
                  {results.length > 5 && (
                    <div className="search-more-results">
                      +{results.length - 5} resultados más
                    </div>
                  )}
                </div>
              )}
              
              {query && !loading && results.length === 0 && (
                <div className="search-no-results">
                  No se encontraron productos para "{query}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
