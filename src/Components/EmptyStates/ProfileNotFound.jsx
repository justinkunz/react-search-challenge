import React from 'react';
import styled from 'styled-components';
import images from '../../assets';
import { Container, EmptyStateText } from '../shared';

const NotFoundImage = styled.img`
  height: 210px;
`;

export default function ProfileNotFound() {
  return (
    <Container>
      <NotFoundImage src={images.notFoundError} alt="profile not found" />
      <div>
        <EmptyStateText bold>Uh oh!</EmptyStateText>
        <EmptyStateText>
          {' '}
          We're having trouble locating this user. Click the Home button to browse more profiles.
        </EmptyStateText>
      </div>
    </Container>
  );
}
