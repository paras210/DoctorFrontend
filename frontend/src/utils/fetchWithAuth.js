import { authHeader } from './authHeader';

export const fetchWithAuth = async (url, options = {}) => {
  const headers = {
    ...options.headers,
    ...authHeader(),
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers: headers,
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json();
};