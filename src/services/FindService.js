import api from '../utils/ApiClient';
import {API_URL, RESOURCE} from "../utils/Constants";

const headers = {
    headers: {
        'Accept': 'application/json', 'Content-Type': 'application/json'
    }
};

export const getToken = async () => api().post(`${API_URL}/${RESOURCE.token}`, null, headers)
    .then((response) =>
        response.data.token
    )
    .catch((error) => {
        console.log(error);
    });

export const fetchResult = async (request) => api().post(`${API_URL}/${RESOURCE.find}`, request, headers)
    .then((response) =>
        response.data
    )
    .catch((error) => {
        console.log(error);
    });

