import axios from 'axios'

export const AxiosAdmin = axios.create({
    baseURL: 'http://localhost:8000',
    // baseURL: 'https://www.api.alataventures.com',
});

AxiosAdmin.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

AxiosAdmin.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href='/admin/login'
;
      }
      return Promise.reject(error);
    }
  );