import api from '../utils/ApiClient';
import {API_URL, RESOURCE} from "../Constants";

export const fetchVehicles = () => api().get(`${API_URL}/${RESOURCE.vehicles}`);