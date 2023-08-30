import axios from 'axios'

export const AxiosAdmin = axios.create({
    baseURL: 'http://localhost:8000'
});