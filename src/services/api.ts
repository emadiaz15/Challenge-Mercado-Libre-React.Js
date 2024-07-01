// src/services/api.ts

// Función para buscar productos basados en una consulta
export const searchProducts = async (query: string) => {
  // Realiza una petición a la API de MercadoLibre con la consulta proporcionada
  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
  // Convierte la respuesta en un objeto JSON
  const data = await response.json();
  // Devuelve los datos obtenidos
  return data;
};

// Función para obtener los detalles de un producto específico basado en su ID
export const getProductDetail = async (id: string) => {
  // Realiza una petición a la API de MercadoLibre para obtener los detalles del producto
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  // Convierte la respuesta en un objeto JSON
  const data = await response.json();
  // Devuelve los datos obtenidos
  return data;
};

// Función para obtener productos aleatorios
export const getRandomProducts = async () => {
  // Realiza una petición a la API de MercadoLibre para obtener productos aleatorios, limitados a 8 resultados
  const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=random&limit=8');
  // Convierte la respuesta en un objeto JSON
  const data = await response.json();
  // Devuelve los resultados obtenidos
  return data.results;
};
