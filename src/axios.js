import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://api.bhumiphotography.com'
    baseURL: 'http://api.eviteri.com'
});

export default instance;