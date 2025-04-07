
import axios from 'axios';

const axios_instance = axios.create({
  baseURL:  'https://67eb8197aa794fb3222a7963.mockapi.io/users',

});

axios_instance.interceptors.request.use(
    (config) => {
      config.headers['my-name'] = ['pooja-purohit'];
        return config;
    },
    (error) => Promise.reject(error)
  );

export default axios_instance;
