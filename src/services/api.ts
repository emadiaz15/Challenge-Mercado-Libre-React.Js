// src/services/api.ts
export const searchProducts = async (query: string) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
  const data = await response.json();
  return data;
};

export const getProductDetail = async (id: string) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  return data;
};

export const getRandomProducts = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=random&limit=8');
  const data = await response.json();
  return data.results;
};
