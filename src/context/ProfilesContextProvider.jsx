import React from 'react';
import ProfilesReducer from '../reducers/profiles';
import mockProfiles from '../profiles.json';

export const ProfileContext = React.createContext({
  profiles: [],
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
