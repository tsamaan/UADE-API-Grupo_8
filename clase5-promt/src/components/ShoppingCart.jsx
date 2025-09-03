import { memo, useState } from 'react';
import { useCart } from '../context/CartContext';
import './ShoppingCart.css';

const ShoppingCart = memo(() => {
  const {
    items,
    total,
    itemCount,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();
  
  const [isOpen, setIsOpen] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(price);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    setShowCheckoutModal(true);
    setTimeout(() => {
      setShowCheckoutModal(false);
      clearCart();
      setIsOpen(false);
    }, 2000);
  };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón del carrito */}
      <button className="cart-button" onClick={toggleCart}>
        🛒 
        <span className="cart-count">{itemCount}</span>
        <span className="cart-total">{formatPrice(total)}</span>
      </button>

      {/* Overlay del carrito */}
      {isOpen && (
        <div className="cart-overlay" onClick={toggleCart}>
          <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>🛒 Tu Carrito</h2>
              <button className="close-cart" onClick={toggleCart}>
                ✕
              </button>
            </div>

            <div className="cart-content">
              {items.length === 0 ? (
                <div className="empty-cart">
                  <p>Tu carrito está vacío</p>
                  <span>🛍️</span>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {items.map(item => (
                      <div key={item.id} className="cart-item">
                        <img 
                          src={item.imagen} 
                          alt={item.nombre}
                          className="cart-item-image"
                        />
                        <div className="cart-item-details">
                          <h4 className="cart-item-name">{item.nombre}</h4>
                          <p className="cart-item-price">{formatPrice(item.precio)}</p>
                          
                          <div className="quantity-controls">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="quantity-btn"
                              disabled={item.quantity <= 1}
                            >
                              −
                            </button>
                            <span className="quantity-display">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="quantity-btn"
                            >
                              +
                            </button>
                          </div>
                          
                          <p className="item-subtotal">
                            Subtotal: {formatPrice(item.precio * item.quantity)}
                          </p>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="remove-item"
                          title="Eliminar del carrito"
                        >
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="cart-summary">
                    <div className="cart-totals">
                      <div className="total-line">
                        <span>Items: {itemCount}</span>
                      </div>
                      <div className="total-line total-final">
                        <span>Total: {formatPrice(total)}</span>
                      </div>
                    </div>

                    <div className="cart-actions">
                      <button 
                        onClick={clearCart}
                        className="clear-cart-btn"
                      >
                        Vaciar carrito
                      </button>
                      <button 
                        onClick={handleCheckout}
                        className="checkout-btn"
                      >
                        Finalizar compra
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmación de compra */}
      {showCheckoutModal && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal">
            <div className="checkout-success">
              <div className="success-icon">✅</div>
              <h3>¡Compra realizada con éxito!</h3>
              <p>Gracias por tu compra. Recibirás un email de confirmación.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

ShoppingCart.displayName = 'ShoppingCart';

export default ShoppingCart;
