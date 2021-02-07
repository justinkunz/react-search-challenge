import { ACTIONS } from '../constants';

const initialProfilesState = {
  profiles: [],
  isFetching: false,
  hasFetchedData: false,
};

export default (state = initialProfilesState, action) => {
  let profiles;
  switch (action.type) {
    case ACTIONS.PROFILES.SET_IS_FETCHING:
      return { ...state, isFetching: !!action.payload };
    case ACTIONS.PROFILES.SET_PROFILES:
      return { ...state, profiles: action.payload };
    case ACTIONS.PROFILES.SET_HAS_FETCHED_DATA:
      return { ...state, hasFetchedData: !!action.payload };
    case ACTIONS.PROFILES.SORT_ASCENDING:
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) =>
        profileA?.name?.first > profileB?.user?.first ? 1 : -1
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
};
