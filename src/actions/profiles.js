import { ACTIONS } from '../constants';

export const setProfiles = (payload) => ({
  payload,
  type: ACTIONS.PROFILES.SET_PROFILES,
});

export const ascendingSort = (payload) => ({
  payload,
  type: ACTIONS.PROFILES.SORT_ASCENDING,
});

export const descendingSort = (payload) => ({
  payload,
  type: ACTIONS.PROFILES.SORT_DESCENDING,
});
