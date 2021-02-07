import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../context/ProfilesContextProvider';
import { useFetchProfiles } from '../hooks';
import images from '../assets';
import { ascendingSort, descendingSort } from '../actions';
import { EmptySearchResults } from '../Components/EmptyStates';
import { SearchCard, Countdown, Loader } from '../Components';
import { Flexbox, IconButton, Grid } from '../Components/shared';

export default function SearchPage() {
  const { profiles = [], isFetching = false, hasFetchedData = false, dispatch } = useContext(
    ProfileContext
  );

  const fetchProfiles = useFetchProfiles();
  const handleSortAscending = () => dispatch(ascendingSort());
  const handleSortDescending = () => dispatch(descendingSort());

  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (profiles.length === 0 && !isFetching && !hasFetchedData) {
      fetchProfiles();
    }
  }, [fetchProfiles, isFetching]);

  const handleFilterClick = () => setIsFiltered(!isFiltered);

  if (!hasFetchedData || (isFetching && profiles?.length === 0)) {
    return <Loader />;
  }

  if (!isFetching && hasFetchedData && profiles?.length === 0) {
    return <EmptySearchResults />;
  }

  return (
    <Fragment>
      <Flexbox justify="flex-end" align="center">
        <Countdown time={10} label="refresh profiles" />
        <IconButton
          src={isFiltered ? images.filterOn : images.filterOff}
          alt="filter"
          size={22}
          onClick={handleFilterClick}
        />
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
        {profiles
          .filter((profile) => !isFiltered || profile.gender === 'female')
          .map((profile) => (
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
    </Fragment>
  );
}
