import api from './Api';

export const loginUser = async (credentials) => {
    // This hits http://localhost:8080/el_olam/auth/login
    const response = await api.post('/login', credentials);
    return response.data;
};

export const signupUser = async (userData) => {
    // This hits http://localhost:8080/el_olam/auth/signup (or /register)
    const response = await api.post('/signup', userData);
    return response.data;
};