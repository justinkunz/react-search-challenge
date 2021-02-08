import api from './apiHandler';
import * as CONSTANTS from '../constants';

/**
 * Calls dummy user API
 *
 * @param {Integer} results Number of profiles to return, optional, defaults to 25
 */
export const getUserProfiles = (results = 25) =>
  api.get(CONSTANTS.API.PROFILES_API_URL, {
    results,
    seed: CONSTANTS.API.RANDOM_USER_SEED_ID,
    nat: 'us',
  });
