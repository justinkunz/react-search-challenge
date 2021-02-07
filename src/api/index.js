import api from './apiHandler';
import { API } from '../constants';

export const getUserProfiles = (results = 20) =>
  api.get(API.PROFILES_API_URL, { results, seed: API.RANDOM_USER_SEED_ID, nat: 'us' });
