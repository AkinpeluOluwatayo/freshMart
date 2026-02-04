import axios from 'axios';

const api = axios.create({
    // The base URL is your local Spring Boot server + the RequestMapping
    baseURL: 'http://localhost:8080/el_olam/auth',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;