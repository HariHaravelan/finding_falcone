import api from '../utils/ApiClient';
import {API_URL, RESOURCE} from "../utils/Constants";

export const fetchVehicles = () => api().get(`${API_URL}/${RESOURCE.vehicles}`);