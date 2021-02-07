import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ProfileContext } from '../context/ProfilesContextProvider';
import { useFetchProfiles } from '../hooks';
import { useParams } from 'react-router-dom';
import { MainLayout } from './PageLayouts';
import { Flexbox, Card, MinimalButton } from '../Components/shared';
import { Loader } from '../Components';
import * as API from '../api';
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

const TableHeader = styled.th`
  font-weight: 400;
  color: #6f6d6d;
  text-align: left;
`;

const Table = styled.table`
  font-family: 'Open Sans', sans-serif;
  ${({ small }) => `font-size: ${small ? '14px' : '16px'};`}
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
  const { profiles = [], isFetching } = useContext(ProfileContext);
  const history = useHistory();

  const [user, setUser] = useState(null);
  const fetchProfiles = useFetchProfiles();

  useEffect(() => {
    if (!profiles || profiles.length === 0) {
      fetchProfiles();
    }

    const currentUser = profiles.find((profile) => profile.login.username === username);
    setUser(currentUser);
  }, [profiles, setUser]);

  const redirectToHome = () => history.push('/');

  const tableData = [
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
  ].filter((data) => !!data);

  return (
    <MainLayout>
      {isFetching ? (
        <Loader />
      ) : (
        <ProfileContainer>
          {!user ? (
            <div>Profile Empty State</div>
          ) : (
            <div>
              <ProfileHeader>
                <Flexbox justify="flex-start">
                  <MinimalButton onClick={redirectToHome}>
                    <BackToResults>&#60; Back to Results</BackToResults>
                  </MinimalButton>
                </Flexbox>
              </ProfileHeader>
              <Flexbox justify="flex-start">
                <Card>
                  <ProfileImage src={user?.picture?.large} alt="potential date" />
                </Card>
                <UserInfoContainer>
                  <FullName>
                    {user?.name?.first} {user?.name?.last}
                  </FullName>
                  <Table>
                    <tbody>
                      {tableData.map((data) => (
                        <tr>
                          <TableHeader>{data.label}:</TableHeader>
                          <td>{data.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </UserInfoContainer>
                <UserContactContainer>
                  <Card pad>
                    <ContactTitle>Contact</ContactTitle>
                    <Table small>
                      <tbody>
                        <tr>
                          <TableHeader>
                            <ContactIcon src={images.phone} alt="phone" />
                          </TableHeader>
                          <td>{user?.cell}</td>
                        </tr>
                        <tr>
                          <TableHeader>
                            <ContactIcon src={images.mail} alt="email" />
                          </TableHeader>
                          <td>{user?.email}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                </UserContactContainer>
              </Flexbox>
            </div>
          )}
        </ProfileContainer>
      )}
    </MainLayout>
  );
}
