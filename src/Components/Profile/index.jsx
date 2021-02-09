import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../../context/ProfilesContextProvider';
import { useFetchProfiles } from '../../hooks';
import { useParams } from 'react-router-dom';
import { Flexbox, Card, MinimalButton, Loader, DocumentTitle } from '../Shared';
import { ProfileNotFound } from '../EmptyStates';
import images from '../../assets';
import UserInfoTable from './UserInfoTable';
import ContactCard from './ContactCard';
import ProfileContainer from './ProfileContainer';
import ProfileHeader from './ProfileHeader';
import ProfileImage from './ProfileImage';
import NavigateBack from './NavigateBack';

export default function UserProfile() {
  const { username = null } = useParams();
  const { profiles = [], isFetching = false, hasFetchedData = false } = useContext(ProfileContext);

  const [user, setUser] = useState(null);
  const fetchProfiles = useFetchProfiles();

  useEffect(() => {
    // Since mock user API does not have a route for grabbing info of a single, specific user
    // Must fetch profiles (if not already fetched), then find the specified user based of the profiles state
    // This also allows for an easy transition when navigating back to the home page

    // Note: Fetch only happens when the app has not yet fetched data
    //    (ie: If a user initially opened or refreshed app on "/profiles/foo" route)
    if (!hasFetchedData && !isFetching) {
      fetchProfiles();
    }

    const currentUser = profiles.find((profile) => profile.login?.username === username);
    setUser(currentUser);
  }, [profiles, setUser, fetchProfiles, hasFetchedData, isFetching, username]);

  if (isFetching || !hasFetchedData) {
    return <Loader />;
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <Flexbox justify="flex-start">
          <Link to="/">
            <MinimalButton>
              <NavigateBack>&#60; Back to Home</NavigateBack>
            </MinimalButton>
          </Link>
        </Flexbox>
      </ProfileHeader>
      {user ? (
        <Flexbox justify="flex-start">
          {/* Overwrite default profile doc title with personalized title */}
          <DocumentTitle title={`Match | ${user?.name?.first}'s Profile`} />
          <Card>
            <ProfileImage src={user?.picture?.large || images.defaultUser} alt="potential date" />
          </Card>
          <UserInfoTable user={user} />
          <ContactCard user={user} />
        </Flexbox>
      ) : (
        <ProfileNotFound />
      )}
    </ProfileContainer>
  );
}
