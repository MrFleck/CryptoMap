import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.nomics.com/v1' 
});

export default api;