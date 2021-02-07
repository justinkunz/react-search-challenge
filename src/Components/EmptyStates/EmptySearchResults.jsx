import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import images from '../../assets';
import { Container, EmptyStateText } from '../shared';

const NotResultsImage = styled.img`
  height: 210px;
`;

export default function EmptySearchResults() {
  return (
    <Container>
      <NotResultsImage src={images.emptyResults} alt="no profile results" />
      <div>
        <EmptyStateText>No Profiles were found. Please try your search again later.</EmptyStateText>
      </div>
    </Container>
  );
}
