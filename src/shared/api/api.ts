import axios from 'axios';

import { LOCAL_STORAGE_KEYS } from 'shared/constants/constants';

export const API = axios.create({
  baseURL: API_URL,
  headers: {
    authorization: localStorage.getItem(LOCAL_STORAGE_KEYS.Auth),
  },
});
