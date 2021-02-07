import api from './apiHandler';
import { ENDPOINTS } from '../constants';

export const getUserProfiles = (results = 20) => api.get(ENDPOINTS.PROFILES_API_URL, { results });
