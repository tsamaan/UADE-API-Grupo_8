# 🛍️ Laboratorio React - Carrito de Compras

## Descripción del Proyecto

Este es un laboratorio completo de React que simula un e-commerce inspirado en **Mercado Libre**. El proyecto implementa las mejores prácticas de desarrollo con React moderno, incluyendo hooks, context API, y componentes optimizados.

## 🎯 Objetivos del Laboratorio

- ✅ Crear un componente que liste productos
- ✅ Implementar funcionalidad de carrito de compras
- ✅ Utilizar `useState` para manejo de estado local
- ✅ Utilizar `useEffect` para llamadas a APIs
- ✅ Utilizar `useContext` para compartir información entre componentes
- ✅ Aplicar buenas prácticas de React moderno

## 🚀 Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca principal
- **Vite** - Herramienta de build y desarrollo
- **JSON Server** - Simulación de API REST
- **CSS Modules** - Estilos modulares
- **Context API** - Manejo de estado global
- **Custom Hooks** - Lógica reutilizable

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── ProductCard.jsx   # Tarjeta de producto individual
│   ├── ProductList.jsx   # Lista de productos con filtros
│   ├── ProductFilters.jsx # Componente de filtros
│   ├── ShoppingCart.jsx  # Carrito de compras
│   └── LoadingSpinner.jsx # Componente de carga
├── context/             # Context providers
│   └── CartContext.jsx  # Context del carrito
├── hooks/               # Custom hooks
│   └── useProducts.js   # Hook para manejo de productos
├── services/            # Servicios de API
│   └── api.js          # Cliente de API
├── database/            # Base de datos simulada
│   └── db.json         # Datos de productos y usuarios
└── App.jsx             # Componente principal
```

## 🛠️ Instalación y Configuración

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar el proyecto completo (recomendado)
```bash
npm run dev:full
```

Este comando ejecuta simultáneamente:
- El servidor de desarrollo de Vite (puerto 5173)
- El servidor JSON (puerto 3001)

### 3. Ejecución separada (opcional)

**Terminal 1 - Servidor de API:**
```bash
npm run server
```

**Terminal 2 - Aplicación React:**
```bash
npm run dev
```

## 🎨 Características Implementadas

### 🏪 Catálogo de Productos
- Grid responsivo de productos
- Imágenes optimizadas con lazy loading
- Información detallada de cada producto
- Badges de descuentos y stock

### 🔍 Sistema de Filtros
- Búsqueda por texto
- Filtro por categoría
- Filtro por rango de precios
- Ordenamiento múltiple
- Limpieza de filtros

### 🛒 Carrito de Compras
- Agregar/quitar productos
- Modificar cantidades
- Persistencia en localStorage
- Cálculo automático de totales
- Interfaz tipo sidebar

### 🎯 Hooks Personalizados
- `useProducts` - Gestión de productos y API
- `useProductFilters` - Lógica de filtros
- `useCart` - Operaciones del carrito

### 📱 Diseño Responsivo
- Mobile-first approach
- Breakpoints optimizados
- Interfaz adaptable

## 🔧 Buenas Prácticas Implementadas

### ⚡ Optimización de Performance
- Componentes memoizados con `memo()`
- Callbacks memoizados con `useCallback()`
- Valores computados con `useMemo()`
- Lazy loading de imágenes

### 🏗️ Arquitectura
- Separación de responsabilidades
- Componentes reutilizables
- Custom hooks para lógica compartida
- Context API para estado global

### 🎨 UX/UI
- Feedback visual inmediato
- Estados de carga
- Manejo de errores
- Animaciones suaves

### 🔒 Robustez
- Manejo de errores de API
- Validaciones de datos
- Estados de loading
- Fallbacks apropiados

## 📊 Datos de Ejemplo

El proyecto incluye 13 productos de ejemplo en diferentes categorías:
- 📱 Tecnología
- 🥽 Anteojos
- 📸 Fotografía
- ⚽ Deportes
- 🎒 Accesorios

## 🎓 Conceptos de React Cubiertos

### useState
- Estado local de componentes
- Actualizaciones inmutables
- Estado derivado

### useEffect
- Llamadas a API
- Efectos de montaje/desmontaje
- Dependencias de efectos
- Cleanup de efectos

### useContext
- Estado global compartido
- Provider pattern
- Evitar prop drilling

### Custom Hooks
- Lógica reutilizable
- Encapsulación de efectos
- Composición de hooks

### Patrones Avanzados
- Compound components
- Render props
- Higher-order components
- Error boundaries

## 🚀 Comandos Útiles

```bash
# Desarrollo completo
npm run dev:full

# Solo la aplicación React
npm run dev

# Solo el servidor JSON
npm run server

# Build para producción
npm run build

# Vista previa del build
npm run preview

# Linting
npm run lint
```

## 🌐 URLs del Proyecto

- **Aplicación React:** http://localhost:5173
- **API JSON Server:** http://localhost:3001
- **API Productos:** http://localhost:3001/productos
- **API Usuarios:** http://localhost:3001/usuarios

## 👥 Equipo de Desarrollo

**UADE - API - Grupo 8**
- Laboratorio de React con Context API
- Implementación de carrito de compras
- Buenas prácticas de desarrollo

## 📝 Notas Adicionales

- El proyecto utiliza React 19.1.1 con las últimas características
- Diseño inspirado en Mercado Libre
- Código optimizado y bien documentado
- Responsive design para todos los dispositivos
- Persistencia local del carrito de compras

---

¡Disfruta explorando este laboratorio de React! 🎉+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
