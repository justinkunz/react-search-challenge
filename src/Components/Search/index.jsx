import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../../context/ProfilesContextProvider';
import { useFetchProfiles } from '../../hooks';
import images from '../../assets';
import { ascendingSort, descendingSort } from '../../actions';
import { EmptySearchResults } from '../EmptyStates';
import { Flexbox, IconButton, Loader } from '../Shared';
import SearchCard from './SearchCard';
import Countdown from './Countdown';
import SearchContainer from './SearchContainer';
import SearchControls from './SearchControls';
import ProfileGrid from './ProfileGrid';

export default function SearchPage() {
  const { profiles = [], isFetching = false, hasFetchedData = false, dispatch } = useContext(
    ProfileContext
  );

  const fetchProfiles = useFetchProfiles();
  const handleSortAscending = () => dispatch(ascendingSort());
  const handleSortDescending = () => dispatch(descendingSort());

  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (!isFetching && !hasFetchedData) {
      fetchProfiles();
    }
  }, [fetchProfiles, isFetching]);

  /**
   * On Filter Button Click,
   * Filter to only users under 50
   */
  const handleFilterClick = () => setIsFiltered(!isFiltered);

  // Show loader if data is not fetched
  // Or if on initial load (no profiles previously loaded)
  if (!hasFetchedData || (isFetching && profiles?.length === 0)) {
    return <Loader />;
  }

  // If search results loaded but no profiles found
  // Show Empty Search Results message
  if (!isFetching && hasFetchedData && profiles?.length === 0) {
    return <EmptySearchResults />;
  }

  return (
    <Fragment>
      <SearchContainer>
        <Flexbox justify="flex-end" align="center">
          <SearchControls>
            <Countdown time={10} label="Refresh Profiles" />
            <Flexbox justify="flex-end">
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
          </SearchControls>
        </Flexbox>

        <ProfileGrid>
          {profiles
            .filter((profile) => !isFiltered || profile.dob?.age < 50)
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
        </ProfileGrid>
      </SearchContainer>
    </Fragment>
  );
}
