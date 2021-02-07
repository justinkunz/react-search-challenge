import { useContext } from 'react';
import { ProfileContext } from '../context/ProfilesContextProvider';
import { setProfiles, setIsFetching } from '../actions';
import * as API from '../api';

export const useFetchProfiles = () => {
  const { dispatch } = useContext(ProfileContext);
  return async () => {
    dispatch(setIsFetching(true));
    const { successful, response } = await API.getUserProfiles();
    dispatch(setIsFetching(false));
    dispatch(setProfiles(response.results));
  };
};
