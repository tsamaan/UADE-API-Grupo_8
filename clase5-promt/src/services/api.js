// Configuración base de la API
const API_BASE_URL = 'http://localhost:3001';

// Clase para manejar errores de la API
class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// Función auxiliar para manejar respuestas de la API
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError(
      errorData.message || 'Error en la solicitud',
      response.status,
      errorData
    );
  }
  return response.json();
};

// Función auxiliar para hacer peticiones con configuración común
const makeRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    return await handleResponse(response);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    // Error de red o conexión
    throw new ApiError('Error de conexión con el servidor', 0, {});
  }
};

// Servicio para productos
export const productService = {
  // Obtener todos los productos
  getAllProducts: async () => {
    return makeRequest('/productos');
  },

  // Obtener producto por ID
  getProductById: async (id) => {
    return makeRequest(`/productos/${id}`);
  },

  // Obtener productos por categoría
  getProductsByCategory: async (category) => {
    return makeRequest(`/productos?categoria=${encodeURIComponent(category)}`);
  },

  // Buscar productos por nombre
  searchProducts: async (query) => {
    return makeRequest(`/productos?nombre_like=${encodeURIComponent(query)}`);
  },

  // Obtener productos con paginación
  getProductsPaginated: async (page = 1, limit = 12) => {
    return makeRequest(`/productos?_page=${page}&_limit=${limit}`);
  }
};

// Servicio para usuarios (para futuras funcionalidades)
export const userService = {
  // Obtener todos los usuarios
  getAllUsers: async () => {
    return makeRequest('/usuarios');
  },

  // Obtener usuario por ID
  getUserById: async (id) => {
    return makeRequest(`/usuarios/${id}`);
  }
};

// Función para verificar si el servidor está disponible
export const checkServerHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/productos?_limit=1`);
    return response.ok;
  } catch (error) {
    return false;
  }
};

// Exportar la clase de error para uso en otros componentes
export { ApiError };
