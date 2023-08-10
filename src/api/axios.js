import axios from 'axios';

// Create an instance of axios with default configuration
const instance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000, // Set timeout for requests in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any custom headers you need
  },
});

// Optional: Add request interceptors
instance.interceptors.request.use(
  (config) => {
    // Add logic before sending the request
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Optional: Add response interceptors
instance.interceptors.response.use(
  (response) => {
    // Add logic for successful response
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default instance;
