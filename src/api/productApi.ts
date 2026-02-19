import axios from 'axios';

const api = axios.create({ baseURL: 'https://product-app-backend-9dso.onrender.com/api'});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const productApi = {
  getAll: (params?: { search?: string; category?: string; page?: number }) =>
    api.get('/products', { params }),
  getById: (id: string) => api.get(`/products/${id}`),
  create: (data: Partial<Product>) => api.post('/products', data),
  update: (id: string, data: Partial<Product>) => api.put(`/products/${id}`, data),
  delete: (id: string) => api.delete(`/products/${id}`),
};

export const authApi = {
  login: (email: string, password: string) => api.post('/auth/login', { email, password }),
  register: (name: string, email: string, password: string) =>
    api.post('/auth/register', { name, email, password }),
};

import type { Product } from '../types';