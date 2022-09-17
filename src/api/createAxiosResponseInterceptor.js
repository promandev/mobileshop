import axios from 'axios';
import { BASE_URL } from "./endpoints.json";

const ResponseType = {
    none: 0,
    success: 1,
    failure: 2,
}

const Axios = axios.create({
    baseURL: "https://front-test-api.herokuapp.com/api",
    timeout: 180000
});

const createAxiosResponseInterceptor = () => {
    const interceptor = Axios.interceptors.response.use(
        response => response,
        errorResponse => {
            const originalRequest = errorResponse.config;
            if (errorResponse.response.status !== 401) {
                return Promise.reject(errorResponse);
            } 
            if (Axios.timeout > 180000) {
                return Promise.reject(errorResponse)
            }
            else if (errorResponse.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                Axios.interceptors.response.eject(interceptor);
                return new Promise((resolve, reject) => {
                }).finally(createAxiosResponseInterceptor);
            } else return Promise.reject(errorResponse);
        }
    );
};

export default Axios;