import { useContext } from 'react';
import { toast } from 'react-toastify';
import { ProfileContext } from '../context/ProfilesContextProvider';
import { setProfiles, setIsFetching } from '../actions';
import * as API from '../api';

/**
 * Hook for fetching profiles
 * Manages error handling & fetching state setting
 */
export const useFetchProfiles = () => {
  const { dispatch } = useContext(ProfileContext);
  return async () => {
    try {
      dispatch(setIsFetching(true));
      const response = await API.getUserProfiles();

      dispatch(setProfiles(response.results));
      dispatch(setIsFetching(false));
    } catch (err) {
      console.error(err);
      toast.error('Unable to retrieve users. Please try again later.');

      dispatch(setProfiles([]));
      dispatch(setIsFetching(false));
    }
  };
};
