import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  // baseURL: 'http://localhost:3000/v1/api',
  baseURL: 'https://dnd-api-server.herokuapp.com/v1/api',
});

// interceptors: slick way to pass token
// 1st function runs every time you are about to make a request
// 2nd function runs every time you get an error when making that request
instance.interceptors.request.use(
  async (config) => {
    const token = await Cookies.getJSON().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default instance;
