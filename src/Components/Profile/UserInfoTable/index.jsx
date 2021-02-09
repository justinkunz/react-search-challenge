import React from 'react';
import { VerticalTable } from '../../Shared';
import UserInfoContainer from './UserInfoContainer';
import FullName from './FullName';

export default function UserInfoTable({ user = {} }) {
  const profileData = [
    user?.dob?.age && {
      label: 'Age',
      value: user.dob.age,
    },
    user?.login?.username && {
      label: 'Username',
      value: user.login.username,
    },
    user?.location?.city &&
      user.location.state && {
        label: 'Location',
        value: `${user.location.city}, ${user.location.state}`,
      },
  ];

  return (
    <UserInfoContainer>
      <FullName>
        {user?.name?.first} {user?.name?.last}
      </FullName>
      <VerticalTable dataSet={profileData} includeSemiColon />
    </UserInfoContainer>
  );
}
