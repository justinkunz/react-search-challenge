import { ACTIONS } from '../constants';

const initialProfilesState = {
  profiles: [],
};

export default (state = initialProfilesState, action) => {
  let profiles;
  switch (action.type) {
    case ACTIONS.PROFILES.SET_PROFILES:
      console.log(action.payload);
      return { profiles: action.payload };
    case ACTIONS.PROFILES.SORT_ASCENDING:
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle > profileB.handle ? 1 : -1));
      return { profiles };

    case ACTIONS.PROFILES.SORT_DESCENDING:
      profiles = [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.handle < profileB.handle ? 1 : -1));
      return { profiles };

    default:
      throw new Error();
  }
};
