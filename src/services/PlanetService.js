import api from '../utils/ApiClient';
import {API_URL, RESOURCE} from "../Constants";

export const fetchPlanets = () => api().get(`${API_URL}/${RESOURCE.planets}`);

