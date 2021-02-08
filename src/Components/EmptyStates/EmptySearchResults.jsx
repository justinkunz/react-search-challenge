import React from 'react';
import images from '../../assets';
import { Container, EmptyStateText } from '../Shared';
import EmptyStateImage from './EmptyStateImage';

export default function EmptySearchResults() {
  return (
    <Container>
      <EmptyStateImage src={images.emptyResults} alt="no profile results" />
      <div>
        <EmptyStateText>No Profiles were found. Please try your search again later.</EmptyStateText>
      </div>
    </Container>
  );
}
