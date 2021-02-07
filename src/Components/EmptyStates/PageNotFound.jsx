import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import images from '../../assets';
import { MinimalButton, Container, EmptyStateText } from '../shared';

const NotFoundImage = styled.img`
  height: 210px;
`;

const HomeRedirectText = styled.div`
  font-family: 'Open Sans';
  color: #1928ef;
  font-weight: 600;
  font-size: 18px;
`;

export default function ProfileNotFound() {
  return (
    <Container>
      <NotFoundImage src={images.notFoundError} alt="page not found" />
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
