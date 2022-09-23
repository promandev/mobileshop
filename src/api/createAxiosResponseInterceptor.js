import axios from 'axios';

const Axios = axios.create({
    baseURL: "https://front-test-api.herokuapp.com/api/cart/",
    timeout: 180000
});

export default Axios;