export const fetchProducts = async () => {
  const response = await fetch('http://localhost:7070/api/top-sales');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

export const fetchProductsDetails = async (id) => {
  const response = await fetch(`http://localhost:7070/api/items/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch('http://localhost:7070/api/categories');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

export const fetchCatalogItems = async (categoryId = null, offset = 0, searchQuery = '') => {
  const queryParams = new URLSearchParams();
  if (categoryId) queryParams.append('categoryId', categoryId);
  if (offset) queryParams.append('offset', offset);
  if (searchQuery) queryParams.append('q', searchQuery);

  const url = `http://localhost:7070/api/items?${queryParams.toString()}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

export const fetchOrder = async (order) => {
  const response = await fetch('http://localhost:7070/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error('Ошибка при оформлении заказа');
  }
  if (response.status === 204) {
    return null;
  }
  const data = await response.json();
  return data;
};
