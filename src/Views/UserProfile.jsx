import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../context/ProfilesContextProvider';
import { useFetchProfiles } from '../hooks';
import { useParams } from 'react-router-dom';
import { Flexbox, Card, MinimalButton, VerticalTable } from '../Components/shared';
import { ProfileNotFound } from '../Components/EmptyStates';
import { Loader, DocumentTitle } from '../Components';
import images from '../assets';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

const UserInfoContainer = styled.div`
  padding-left: 24px;
`;

const FullName = styled.div`
  font-size: 48px;
  text-transform: capitalize;
  font-family: 'Crimson Pro', serif;
  margin-bottom: 4px;
`;

const ProfileImage = styled.img`
  height: 100%;
`;

const UserContactContainer = styled.div`
  position: absolute;
  right: 0;
`;

const ContactTitle = styled.div`
  font-size: 32px;
  font-family: 'Crimson Pro', serif;
  margin-bottom: 4px;
  text-align: center;
`;

const ContactIcon = styled.img`
  height: 24px;
  padding: 0 4px;
`;

const ProfileHeader = styled.div`
  margin-bottom: 12px;
`;
const BackToResults = styled.div`
  color: #1928ef;
  font-weight: 600;
  font-family: 'Open sans', sans-serif;
  font-size: 16px;
`;

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

  const profileData = [
    user?.dob?.age && {
      label: 'Age',
      value: user.dob.age,
    },
    {
      label: 'Username',
      value: user?.login?.username,
    },
    user?.location?.city &&
      user?.location.state && {
        label: 'Location',
        value: `${user.location.city}, ${user.location.state}`,
      },
  ];

  const contactData = [
    user?.cell && {
      label: <ContactIcon src={images.phone} alt="phone" />,
      value: user.cell,
    },
    user?.email && {
      label: <ContactIcon src={images.mail} alt="email" />,
      value: user.email,
    },
  ];

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
              <BackToResults>&#60; Back to Home</BackToResults>
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
          <UserInfoContainer>
            <FullName>
              {user?.name?.first} {user?.name?.last}
            </FullName>
            <VerticalTable dataSet={profileData} includeSemiColon />
          </UserInfoContainer>
          <UserContactContainer>
            <Card pad>
              <ContactTitle>Contact</ContactTitle>
              <VerticalTable dataSet={contactData} small />
            </Card>
          </UserContactContainer>
        </Flexbox>
      )}
    </ProfileContainer>
  );
}
