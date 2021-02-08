import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../../context/ProfilesContextProvider';
import { useFetchProfiles } from '../../hooks';
import { useParams } from 'react-router-dom';
import { Flexbox, Card, MinimalButton, Loader, DocumentTitle } from '../Shared';
import { ProfileNotFound } from '../EmptyStates';
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
    if (profiles?.length === 0 && !hasFetchedData && !isFetching) {
      fetchProfiles();
    }

    const currentUser = profiles.find((profile) => profile.login.username === username);
    setUser(currentUser);
  }, [profiles, setUser]);

  if (isFetching) {
    return <Loader />;
  }

  if (!isFetching && !hasFetchedData) {
    return null;
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
      {!user ? (
        <ProfileNotFound />
      ) : (
        <Flexbox justify="flex-start">
          <DocumentTitle title={`Match | ${user?.name?.first}'s Profile`} />
          <Card>
            <ProfileImage src={user?.picture?.large} alt="potential date" />
          </Card>
          <UserInfoTable user={user} />
          <ContactCard user={user} />
        </Flexbox>
      )}
    </ProfileContainer>
  );
}
