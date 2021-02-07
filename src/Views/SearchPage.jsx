import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../context/ProfilesContextProvider';
import images from '../assets';
import { setProfiles, ascendingSort, descendingSort } from '../actions';
import { MainLayout } from './PageLayouts';
import { SearchCard, Countdown, Loader } from '../Components';
import { Flexbox, IconButton, Grid } from '../Components/shared';
import * as API from '../api';

export default function SearchPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { profiles = [], dispatch } = useContext(ProfileContext);

  const handleSortAscending = () => dispatch(ascendingSort());
  const handleSortDescending = () => dispatch(descendingSort());

  useEffect(() => {
    const fetchProfiles = async () => {
      setIsLoading(true);
      const profiles = await API.getUserProfiles();
      setIsLoading(false);
      dispatch(setProfiles(profiles.response.results));
    };

    fetchProfiles();
  }, [dispatch]);

  return (
    <MainLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Flexbox justify="flex-end" align="center">
            <Countdown time={10} label="refresh profiles" actionText="Refreshing Profiles" />
            <IconButton disabled src={images.filter} alt="filter" size={22} />
            <IconButton
              onClick={handleSortAscending}
              src={images.ascending}
              alt="Sort ascending"
              size={22}
            />
            <IconButton
              onClick={handleSortDescending}
              src={images.descending}
              alt="Sort descending"
              size={22}
            />
          </Flexbox>

          <Grid columnCount={4}>
            {profiles.map((profile) => (
              <SearchCard
                key={profile?.id?.value}
                photoUrl={profile?.picture?.large}
                name={profile?.name?.first}
                location={profile?.location?.country}
                age={profile?.dob?.age}
              />
            ))}
          </Grid>
        </>
      )}
    </MainLayout>
  );
}
