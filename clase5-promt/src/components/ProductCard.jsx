import { memo } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = memo(({ product }) => {
  const { addToCart, isInCart, getItemQuantity } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(price);
  };

  const discountPrice = product.precio * 0.85; // Simulamos un 15% de descuento
  const hasDiscount = Math.random() > 0.5; // Aleatoriamente algunos productos tienen descuento

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.imagen} 
          alt={product.nombre}
          className="product-image"
          loading="lazy"
        />
        {hasDiscount && (
          <span className="discount-badge">15% OFF</span>
        )}
        {product.stock < 10 && (
          <span className="stock-badge">¡Últimas unidades!</span>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.nombre}</h3>
        
        <div className="product-pricing">
          {hasDiscount && (
            <span className="original-price">{formatPrice(product.precio)}</span>
          )}
          <span className="current-price">
            {formatPrice(hasDiscount ? discountPrice : product.precio)}
          </span>
        </div>

        <div className="product-benefits">
          <span className="benefit">✅ Envío gratis</span>
          <span className="benefit">📱 12 cuotas sin interés</span>
        </div>

        <p className="product-description">{product.descripcion}</p>

        <div className="product-details">
          <span className="category">📂 {product.categoria}</span>
          <span className="stock">📦 Stock: {product.stock}</span>
        </div>

        <div className="product-actions">
          {isInCart(product.id) ? (
            <div className="quantity-info">
              <span className="in-cart-text">
                En carrito: {getItemQuantity(product.id)}
              </span>
              <button 
                onClick={handleAddToCart}
                className="add-more-btn"
              >
                Agregar más
              </button>
            </div>
          ) : (
            <button 
              onClick={handleAddToCart}
              className="add-to-cart-btn"
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
