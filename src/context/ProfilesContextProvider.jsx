import React from 'react';
import ProfilesReducer from '../reducers/profiles';

export const ProfileContext = React.createContext({
  profiles: [],
  isFetching: false,
  hasFetchedData: false,
});

function ProfilesContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(ProfilesReducer, {
    profiles: [],
  });

  return (
    <ProfileContext.Provider value={{ ...state, dispatch }}>{children}</ProfileContext.Provider>
  );
}

export default ProfilesContextProvider;
