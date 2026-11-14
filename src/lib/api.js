const API_URL = process.env.REACT_APP_API_URL || '';

const apiUrl = (path) => `${API_URL}${path}`;

const fetchJson = async (path, options) => {
  const response = await fetch(apiUrl(path), options);
  if (!response.ok) {
    throw new Error(`GET ${path} falhou com status ${response.status}`);
  }
  return response.json();
};

export const fetchCoupons = () => fetchJson('/api/coupons');

export const fetchCoupon = async (id) => {
  const response = await fetch(apiUrl(`/api/coupons/${id}`));
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`GET /api/coupons/${id} falhou com status ${response.status}`);
  }
  return response.json();
};

export const registerCouponClick = (id) => {
  fetch(apiUrl(`/api/coupons/${id}/click`), { method: 'POST', keepalive: true }).catch((error) => {
    console.error(`Falha ao registrar clique no cupom "${id}":`, error);
  });
};
