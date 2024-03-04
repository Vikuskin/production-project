import axios, { InternalAxiosRequestConfig } from 'axios';

import { LOCAL_STORAGE_KEYS } from 'shared/constants/localStorageKeys';

export const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = localStorage.getItem(LOCAL_STORAGE_KEYS.Auth) || '';

  return config;
});
