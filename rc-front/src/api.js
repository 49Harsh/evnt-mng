import axios from 'axios';

const api = axios.create({
    baseURL:  'https://milanmanch.com/api',
    // baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
