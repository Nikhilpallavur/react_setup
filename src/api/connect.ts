import axios, { AxiosInstance } from 'axios';
import { LOCAL_STORAGE_KEYS, ROUTE_NAME } from '../constants';
import { BASE_URL } from '../app/config';
import { redirect } from 'react-router-dom';
import { fetchLocalData } from '../utils';

// Create an Axios instance with AbortController
const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const AUTH_TOKEN = fetchLocalData<string>(LOCAL_STORAGE_KEYS.token);
    if (AUTH_TOKEN) {
      config.headers.Authorization = AUTH_TOKEN;
    }

    // Attach a new AbortController to each request if not already present
    if (!config.signal) {
      const abortController = new AbortController();
      config.signal = abortController.signal;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lies within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.status === 401) {
      // Redirect to the login page
      redirect(ROUTE_NAME.login);
    }
    return Promise.reject(error);
  }
);

export default instance;
