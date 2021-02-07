import { ACTIONS } from '../constants';

const initialProfilesState = {
  profiles: [],
};

export default (state = initialProfilesState, action) => {
  let profiles;
  switch (action.type) {
    case ACTIONS.PROFILES.SET_IS_FETCHING:
      return { ...state, isFetching: !!action.payload };
    case ACTIONS.PROFILES.SET_PROFILES:
      return { profiles: action.payload };
    case ACTIONS.PROFILES.SORT_ASCENDING:
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle > profileB.handle ? 1 : -1));
      return { ...state, profiles };

    case ACTIONS.PROFILES.SORT_DESCENDING:
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle < profileB.handle ? 1 : -1));
      return { ...state, profiles };

    default:
      throw new Error();
  }
};
