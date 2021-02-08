import React from 'react';
import images from '../../assets';
import { Container, EmptyStateText } from '../Shared';
import EmptyStateImage from './EmptyStateImage';

export default function ProfileNotFound() {
  return (
    <Container>
      <EmptyStateImage src={images.notFoundError} alt="profile not found" />
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
