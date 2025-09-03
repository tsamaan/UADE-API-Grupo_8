# 🎯 Ejercicios Adicionales - Laboratorio React

## 📝 Ejercicios Básicos

### 1. **Favoritos de Productos**
**Objetivo:** Implementar funcionalidad de productos favoritos.

**Tareas:**
- [ ] Crear un nuevo Context `FavoritesContext`
- [ ] Agregar botón de "❤️" en cada ProductCard
- [ ] Mostrar lista de favoritos en un modal
- [ ] Persistir favoritos en localStorage

**Pistas:**
```javascript
// FavoritesContext.jsx
const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  
  const addToFavorites = (product) => {
    // Implementar lógica
  };
  
  const removeFromFavorites = (productId) => {
    // Implementar lógica
  };
  
  const isFavorite = (productId) => {
    // Implementar lógica
  };
  
  return { favorites, addToFavorites, removeFromFavorites, isFavorite };
};
```

### 2. **Historial de Productos Vistos**
**Objetivo:** Guardar y mostrar productos recientemente vistos.

**Tareas:**
- [ ] Crear hook `useRecentlyViewed`
- [ ] Agregar productos al historial al hacer click
- [ ] Mostrar últimos 5 productos vistos
- [ ] Implementar límite de productos en el historial

### 3. **Comparador de Productos**
**Objetivo:** Permitir comparar productos lado a lado.

**Tareas:**
- [ ] Agregar checkbox "Comparar" en ProductCard
- [ ] Crear componente `ProductComparison`
- [ ] Mostrar tabla comparativa con características
- [ ] Límite máximo de 3 productos para comparar

## 🚀 Ejercicios Intermedios

### 4. **Paginación de Productos**
**Objetivo:** Implementar paginación para mejorar performance.

**Tareas:**
- [ ] Modificar `useProducts` para paginación
- [ ] Crear componente `Pagination`
- [ ] Implementar navegación por páginas
- [ ] Mostrar información "Página X de Y"

**API Endpoint:**
```
GET /productos?_page=1&_limit=12
```

### 5. **Filtros Avanzados**
**Objetivo:** Expandir sistema de filtros.

**Tareas:**
- [ ] Filtro por rating (estrellas)
- [ ] Filtro por disponibilidad (en stock/sin stock)
- [ ] Filtro por marca (extraer de nombre del producto)
- [ ] Filtros múltiples combinables

### 6. **Notificaciones Toast**
**Objetivo:** Mostrar feedback visual al usuario.

**Tareas:**
- [ ] Crear Context `NotificationContext`
- [ ] Implementar componente `Toast`
- [ ] Mostrar notificaciones en acciones (agregar al carrito, etc.)
- [ ] Auto-dismiss después de 3 segundos

**Ejemplo:**
```javascript
const { showNotification } = useNotification();

const handleAddToCart = () => {
  addToCart(product);
  showNotification({
    type: 'success',
    message: 'Producto agregado al carrito',
    duration: 3000
  });
};
```

## 🎨 Ejercicios de UI/UX

### 7. **Modo Oscuro/Claro**
**Objetivo:** Implementar tema dinámico.

**Tareas:**
- [ ] Crear Context `ThemeContext`
- [ ] Definir variables CSS para temas
- [ ] Agregar toggle de tema en header
- [ ] Persistir preferencia en localStorage

### 8. **Skeleton Loading**
**Objetivo:** Mejorar experiencia de carga.

**Tareas:**
- [ ] Crear componente `ProductCardSkeleton`
- [ ] Mostrar skeletons durante carga
- [ ] Animar skeletons con CSS
- [ ] Reemplazar con contenido real al cargar

### 9. **Galería de Imágenes de Producto**
**Objetivo:** Mostrar múltiples imágenes por producto.

**Tareas:**
- [ ] Crear modal `ProductGallery`
- [ ] Navegación entre imágenes (anterior/siguiente)
- [ ] Thumbnails de vista previa
- [ ] Zoom de imágenes

## 🔧 Ejercicios Técnicos

### 10. **Optimización con React.memo y useMemo**
**Objetivo:** Mejorar performance de la aplicación.

**Tareas:**
- [ ] Identificar componentes que re-renderizan innecesariamente
- [ ] Aplicar `React.memo` donde corresponda
- [ ] Usar `useMemo` para cálculos costosos
- [ ] Medir mejoras con React DevTools Profiler

### 11. **Error Boundaries**
**Objetivo:** Manejo robusto de errores.

**Tareas:**
- [ ] Crear componente `ErrorBoundary`
- [ ] Capturar errores de componentes
- [ ] Mostrar UI de fallback elegante
- [ ] Implementar botón "Reintentar"

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Algo salió mal. <button onClick={() => window.location.reload()}>Reintentar</button></h2>;
    }

    return this.props.children;
  }
}
```

### 12. **Testing con Jest y React Testing Library**
**Objetivo:** Asegurar calidad del código con tests.

**Tareas:**
- [ ] Configurar entorno de testing
- [ ] Test unitarios para hooks personalizados
- [ ] Test de integración para componentes
- [ ] Test de Context providers

**Ejemplo de test:**
```javascript
// ProductCard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider } from '../context/CartContext';
import ProductCard from './ProductCard';

const mockProduct = {
  id: 1,
  nombre: 'Test Product',
  precio: 100,
  imagen: 'test.jpg'
};

test('should add product to cart when button is clicked', () => {
  render(
    <CartProvider>
      <ProductCard product={mockProduct} />
    </CartProvider>
  );

  const addButton = screen.getByText('Agregar al carrito');
  fireEvent.click(addButton);

  expect(screen.getByText(/En carrito/)).toBeInTheDocument();
});
```

## 🌐 Ejercicios de Integración

### 13. **API Real con Autenticación**
**Objetivo:** Integrar con una API real.

**Tareas:**
- [ ] Configurar Firebase/Supabase
- [ ] Implementar login/registro
- [ ] Proteger rutas que requieren autenticación
- [ ] Guardar carrito por usuario

### 14. **Checkout y Pagos**
**Objetivo:** Simular proceso de compra completo.

**Tareas:**
- [ ] Crear formulario de datos de envío
- [ ] Calcular costos de envío
- [ ] Integrar con Stripe/PayPal (modo sandbox)
- [ ] Generar orden de compra

### 15. **PWA (Progressive Web App)**
**Objetivo:** Convertir en aplicación instalable.

**Tareas:**
- [ ] Configurar Service Worker
- [ ] Crear manifest.json
- [ ] Implementar funcionalidad offline
- [ ] Cache de productos para uso offline

## 📊 Ejercicios de Análisis

### 16. **Analytics y Métricas**
**Objetivo:** Trackear comportamiento del usuario.

**Tareas:**
- [ ] Integrar Google Analytics
- [ ] Trackear eventos de ecommerce
- [ ] Crear dashboard de métricas
- [ ] A/B testing para diferentes UIs

### 17. **Performance Monitoring**
**Objetivo:** Monitorear performance en producción.

**Tareas:**
- [ ] Implementar Web Vitals
- [ ] Crear reportes de performance
- [ ] Optimizar bundle size
- [ ] Implementar lazy loading de rutas

## 🏆 Proyecto Final

### 18. **E-commerce Completo**
**Objetivo:** Combinar todos los ejercicios anteriores.

**Características finales:**
- ✅ Catálogo de productos con filtros avanzados
- ✅ Carrito de compras persistente
- ✅ Sistema de favoritos
- ✅ Comparador de productos
- ✅ Historial de productos vistos
- ✅ Sistema de notificaciones
- ✅ Modo oscuro/claro
- ✅ Autenticación de usuarios
- ✅ Proceso de checkout
- ✅ PWA capabilities
- ✅ Testing completo
- ✅ Performance optimizada

## 📚 Recursos Adicionales

### Lecturas Recomendadas:
- [React Docs - Hooks](https://react.dev/reference/react)
- [Patterns.dev - React Patterns](https://www.patterns.dev/)
- [React Performance](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)

### Herramientas Útiles:
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [Web Vitals Extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma)

---

¡Diviértete explorando estos ejercicios y mejorando tus habilidades en React! 🚀
