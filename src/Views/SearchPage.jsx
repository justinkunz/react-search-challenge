import React, { useContext, useEffect } from 'react';
import { ProfileContext } from '../context/ProfilesContextProvider';
import { useFetchProfiles } from '../hooks';
import images from '../assets';
import { setProfiles, ascendingSort, descendingSort } from '../actions';
import { MainLayout } from './PageLayouts';
import { SearchCard, Countdown, Loader } from '../Components';
import { Flexbox, IconButton, Grid } from '../Components/shared';
import * as API from '../api';

export default function SearchPage() {
  const { profiles = [], isFetching = false, dispatch } = useContext(ProfileContext);

  const fetchProfiles = useFetchProfiles();
  const handleSortAscending = () => dispatch(ascendingSort());
  const handleSortDescending = () => dispatch(descendingSort());

  useEffect(fetchProfiles, []);

  const showFullPageLoader = isFetching && profiles.length === 0;
  return (
    <MainLayout>
      {showFullPageLoader ? (
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
                key={profile?.login?.username}
                photoUrl={profile?.picture?.large}
                name={profile?.name?.first}
                location={profile?.location?.city}
                age={profile?.dob?.age}
                username={profile?.login?.username}
              />
            ))}
          </Grid>
        </>
      )}
    </MainLayout>
  );
}
