import React from 'react';
import LoadingContainer from './LoadingContainer';
import Circle from './Circle';

export default function Loader() {
  return (
    <LoadingContainer>
      <Circle delay={0.32} />
      <Circle delay={0.16} />
      <Circle delay={1.4} />
    </LoadingContainer>
  );
}
