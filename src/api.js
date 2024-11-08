import axios from "axios";

const api = axios.create(
    {
        baseURL: 'https://api.jesusking.tech'
    }
);

export default api;