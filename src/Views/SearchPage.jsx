import React, { useContext } from 'react';
import { ProfileContext } from '../context/ProfilesContextProvider';
import images from '../assets';
import { MainLayout } from './PageLayouts';
import { SearchCard, Countdown } from '../Components';
import { Flexbox, IconButton, Grid } from '../Components/shared';

export default function SearchPage() {
  const { profiles = [], dispatch } = useContext(ProfileContext);

  const handleSortAscending = () => dispatch({ type: 'ascending' });
  const handleSortDescending = () => dispatch({ type: 'descending' });

  const fetchProfiles = () => 5;
  return (
    <MainLayout>
      <Flexbox justify="flex-end" align="center">
        <Countdown
          time={10}
          label="profiles will refresh in:"
          onTimerComplete={fetchProfiles}
          actionText="Refreshing Profiles"
        />
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
          <SearchCard key={profile.id} {...profile} />
        ))}
      </Grid>
    </MainLayout>
  );
}
