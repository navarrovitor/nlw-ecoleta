import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.10.36:8000/'
});

export default api;