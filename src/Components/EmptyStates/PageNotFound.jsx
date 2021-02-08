import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets';
import { MinimalButton, Container, EmptyStateText } from '../Shared';
import EmptyStateImage from './EmptyStateImage';
import HomeRedirectText from './HomeRedirectText';

export default function ProfileNotFound() {
  return (
    <Container>
      <EmptyStateImage src={images.notFoundError} alt="page not found" />
      <div>
        <EmptyStateText bold>Uh oh!</EmptyStateText>
        <EmptyStateText> The page you're looking for does not exist.</EmptyStateText>
      </div>
      <Link to="/">
        <MinimalButton>
          <HomeRedirectText>Go to Home Page</HomeRedirectText>
        </MinimalButton>
      </Link>
    </Container>
  );
}
