import xior from 'xior';

export const fambaApi = xior.create({
  baseURL: '/api',
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'en',
    'Content-Type': 'application/json',
  },
});
