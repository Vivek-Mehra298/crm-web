import axios from "axios";

const api=axios.create({
    baseURL:"https://crm-server-l3go.onrender.com"
});

export default api;