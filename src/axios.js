import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.bhumiphotography.com'
});

export default instance;