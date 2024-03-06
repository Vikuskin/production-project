import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LOCAL_STORAGE_KEYS } from '@/shared/constants/localStorageKeys';

export const RTKapi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(LOCAL_STORAGE_KEYS.Auth) || '';

      token && headers.set('Authorization', token);

      return headers;
    },
  }),
  endpoints: () => ({}),
});
