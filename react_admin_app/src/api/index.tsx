import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000',
});

// User Api Services
export const signIn=(formData:any)=>API.post('user/signin', formData);
export const signUp=(formData:any)=>API.post('user/signup', formData);