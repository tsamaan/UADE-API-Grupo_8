import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import './App.css'

function App() {
  const handleProductSelect = (product) => {
    console.log('Producto seleccionado:', product);
    // Aquí podrías implementar lógica adicional como scroll al producto
    // o mostrar un modal con detalles del producto
  };

  return (
    <CartProvider>
      <div className="App">
        <Header onProductSelect={handleProductSelect} />
        
        <main className="app-main">
          <ProductList />
        </main>
        
        <ShoppingCart />
        
        <footer className="app-footer">
          <p>© 2025 - Laboratorio de React - UADE API Grupo 8</p>
        </footer>
      </div>
    </CartProvider>
  )
}

export default App
