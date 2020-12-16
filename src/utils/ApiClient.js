import axios from 'axios';

const httpClient = () => {

    return {
        get: (url) => axios.get(url),
        post: (url, body, options) => axios.post(url, body, options),
        put: (url, body, options) => axios.put(url, body, options),
    };
};

export default httpClient;