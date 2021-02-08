import { ACTIONS } from '../constants';

const initialProfilesState = {
  profiles: [],
  isFetching: false,
  hasFetchedData: false,
};

export default function profilesReducer(state = initialProfilesState, action) {
  let profiles;
  switch (action.type) {
    case ACTIONS.PROFILES.SET_IS_FETCHING:
      // On initial data fetch, toggle hasFetchedData state to true.
      const hasFetchedData = !action.payload && !state.hasFetchedData ? true : state.hasFetchedData;
      return { ...state, isFetching: !!action.payload, hasFetchedData };
    case ACTIONS.PROFILES.SET_PROFILES:
      return { ...state, profiles: action.payload };
    case ACTIONS.PROFILES.SORT_ASCENDING:
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) =>
        profileA?.name?.first > profileB?.name?.first ? 1 : -1
      );
      return { ...state, profiles };
    case ACTIONS.PROFILES.SORT_DESCENDING:
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) =>
        profileA?.name?.first < profileB?.name?.first ? 1 : -1
      );
      return { ...state, profiles };

    default:
      throw new Error();
  }
}
