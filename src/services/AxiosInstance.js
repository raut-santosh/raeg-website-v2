// axiosInstance.js
import axios from 'axios';

// List of GET routes that don’t require an authorization token
const routesWithoutToken = [
  '/items/tournaments',
  '/items/members',
  '/items/games',
  '/items/contests',
  '/items/blogs',
];

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.apiUrl, // Set your API base URL here
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('url: ',config.url)
    // Check if the request method is GET and if the URL matches any routes that don’t need a token
    const requiresToken = !(config.method === 'get' && routesWithoutToken.some(route => config.url.includes(route)));

    if (requiresToken) {
      // Get the token from local storage
      const currentUserString = localStorage.getItem('currentUser');
      const currentUser = currentUserString ? JSON.parse(currentUserString) : null;
      const token = currentUser?.session?.access_token;

      // If the token exists, set the Authorization header
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config; // Return the modified config
  },
  (error) => {
    // Handle the request error
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized or other errors globally
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - redirecting to login');
      localStorage.clear();
      window.location.href = '/login';
      // Add your logout logic or redirect here
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
