import axios from 'axios';

// https://api.hgbrasil.com/weather?key=8e5a400c&lat=-23.682&lon=-46.875

export const key = '8e5a400c';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;