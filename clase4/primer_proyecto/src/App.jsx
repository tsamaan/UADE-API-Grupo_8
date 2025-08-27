import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // Funciones que se pasarán como props
  const handleCardClick = (cardTitle) => {
    alert(`¡Hiciste click en la card: ${cardTitle}!`);
  };

  const handleButtonClick = (cardTitle) => {
    console.log(`Botón presionado en: ${cardTitle}`);
    alert(`Botón presionado en: ${cardTitle}`);
  };

  const handleProductClick = (productName) => {
    setCount(prev => prev + 1);
    alert(`Producto agregado al carrito: ${productName}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Ejemplos de Componente Card</h1>
      <p>Demostrando props con valores, funciones y children, entre otros...</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>

        {/* Card básica con props de valores y funciones */}
        <Card title="Mi Primera Card" subtitle="Esta es una card básica con título y subtítulo" onCardClick={handleCardClick} onButtonClick={handleButtonClick} buttonText="Click aquí">

          {/* Children: contenido personalizado */}
          <p>Este contenido está dentro de los <strong>children</strong> de la card.</p>
          <p>Puedes poner cualquier JSX aquí!</p>

        </Card>

        {/* Card destacada con imagen */}
        <Card
          title="Card Destacada"
          subtitle="Esta card tiene la prop isHighlighted=true"
          imageUrl="https://via.placeholder.com/400x200/007bff/ffffff?text=Imagen+Ejemplo"
          isHighlighted={true}
          onCardClick={handleCardClick}
          onButtonClick={handleButtonClick}
          buttonText="Ver detalles"
        >
          <p>🌟 Esta es una card destacada con imagen.</p>
          <p>La prop <code>isHighlighted</code> cambia su apariencia.</p>
        </Card>

        {/* Card de producto con children más complejos */}
        <Card
          title="Producto de Ejemplo"
          subtitle="Smartphone de última generación"
          imageUrl="https://via.placeholder.com/400x200/28a745/ffffff?text=Producto"
          onCardClick={handleCardClick}
          onButtonClick={handleProductClick}
          buttonText="Agregar al carrito"
        >
          {/* Children más complejos */}
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
              $999.99
            </span>
            <span style={{ marginLeft: '8px', textDecoration: 'line-through', color: '#888' }}>
              $1,299.99
            </span>
          </div>
          <ul style={{ paddingLeft: '20px', margin: '8px 0' }}>
            <li>Pantalla OLED 6.5"</li>
            <li>128GB de almacenamiento</li>
            <li>Cámara 48MP</li>
          </ul>
          <p>⭐ Rating: 4.8/5 (1,234 reseñas)</p>
        </Card>

        {/* Card sin botón */}
        <Card
          title="Card sin Botón"
          subtitle="Esta card solo tiene función onClick en la card completa"
          onCardClick={handleCardClick}
        >
          <p>Esta card no tiene botón, solo puedes hacer click en toda la card.</p>
          <p>La función <code>onButtonClick</code> es opcional.</p>
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '6px', marginTop: '12px' }}>
            <strong>Contador actual:</strong> {count}
          </div>
        </Card>

        {/* Card con children muy personalizados */}
        <Card
          title="Children Personalizados"
          subtitle="Ejemplo de contenido totalmente personalizado"
          onCardClick={handleCardClick}
          onButtonClick={handleButtonClick}
          buttonText="Interactuar"
        >
          {/* Children completamente personalizados */}
          <div style={{
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            padding: '16px', borderRadius: '8px', color: 'white', marginBottom: '12px'
          }}>
            <h4 style={{ margin: '0 0 8px 0' }}>¡Contenido Especial!</h4>
            <p style={{ margin: 0 }}>Los children pueden ser cualquier JSX</p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setCount(count + 5);
            }}
            style={{
              background: '#ff6b6b', color: 'white', border: 'none',
              padding: '8px 16px', borderRadius: '4px', cursor: 'pointer'
            }}
          >
            +5 al contador
          </button>

          <div style={{ marginTop: '12px', fontSize: '14px', color: '#666' }}>
            <em>Este botón está dentro de los children y no interfiere con el botón principal.</em>
          </div>
        </Card>

      </div>

      <div style={{
        marginTop: '40px', textAlign: 'center', background: '#f8f9fa',
        padding: '20px', borderRadius: '8px'
      }}>
        <h3>Resumen de Props Utilizadas:</h3>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li><strong>Props con valores:</strong> title, subtitle, imageUrl, isHighlighted, buttonText</li>
          <li><strong>Props con funciones:</strong> onCardClick, onButtonClick</li>
          <li><strong>Props children:</strong> Todo el contenido JSX entre las etiquetas de apertura y cierre</li>
        </ul>
      </div>
    </div>
  )
}

export default App
