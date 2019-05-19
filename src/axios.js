import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://rest.eviteri.com'
});

export default instance;