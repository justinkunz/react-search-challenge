import { ACTIONS } from '../constants';

export const setIsFetching = (payload) => ({
  payload,
  type: ACTIONS.PROFILES.SET_IS_FETCHING,
});

export const setProfiles = (payload) => ({
  payload,
  type: ACTIONS.PROFILES.SET_PROFILES,
});

export const setHasFetchedData = (payload) => ({
  payload,
  type: ACTIONS.PROFILES.SET_HAS_FETCHED_DATA,
});

export const ascendingSort = (payload) => ({
  payload,
  type: ACTIONS.PROFILES.SORT_ASCENDING,
});

export const descendingSort = (payload) => ({
  payload,
  type: ACTIONS.PROFILES.SORT_DESCENDING,
});
