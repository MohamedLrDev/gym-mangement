import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getMembers = async () => {
  const response = await api.get('/members');
  return response.data;
};

export const getClasses = async () => {
  const response = await api.get('/classes');
  return response.data;
};

export const getBilling = async () => {
  const response = await api.get('/billing');
  return response.data;
};

export const getSettings = async () => {
  const response = await api.get('/settings');
  return response.data;
};

export const getDashboard = async () => {
   const response = await api.get('/dashboard');
   return response.data;
};












