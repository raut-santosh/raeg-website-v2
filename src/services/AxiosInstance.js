// axiosInstance.js
import axios from 'axios';
// localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI5MzQ4ZTdlLTIzMWItNDdhNS04MDc2LWNmMzcwZDkyOTU1MiIsInJvbGUiOiJhNmRiNmIzOS01YWQzLTQ2YWEtYWUyZi02Mjk3MzgxNDEzMzEiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjEsImlhdCI6MTczMDQ3NTE1OCwiZXhwIjoxNzMwNTYxNTU4LCJpc3MiOiJkaXJlY3R1cyJ9.LvUOApYMwz0Bim6w28ZjnY7yJ5JxAB2YHMtj3Z0p-Rg")
// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.apiUrl, // Set your API base URL here
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const token = localStorage.getItem('token');

    // If the token exists, set the Authorization header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
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
      // Handle unauthorized access (e.g., redirect to login)
      console.error('Unauthorized access - redirecting to login');
      // Add your logout logic or redirect here
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
