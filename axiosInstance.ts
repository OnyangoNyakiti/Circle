// src/axiosInstance.ts

import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define base URL for the API
const BASE_URL = 'https://cycle-api.vercel.app/'; // Change to your API base URL

// Create an instance of Axios
const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor for adding the x-token header
axiosInstance.interceptors.request.use(
    async (config) => {
        // Retrieve the token from AsyncStorage
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
            config.headers['x-token'] = `auth_${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling responses or errors globally
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors globally
        console.error('API call error:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
