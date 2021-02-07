import React from 'react';
import styled, { keyframes } from 'styled-components';
import images from '../assets';

const resize = keyframes`
  0% {
    height: 48px;
  }

  50% {
    height: 96px;
  }

 100% {
    height: 48px;
  }
`;

const ResizingImage = styled.img`
  display: inline-block;
  animation: ${resize} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const LoadingContainer = styled.div`
  position: relative;
  text-align: center;
  height: 160px;
`;

const LoadingText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 24px;
  font-family: 'Open Sans', sans-serif;
`;
export default function Loader() {
  return (
    <>
      <LoadingContainer>
        <ResizingImage src={images.heart} alt="loading heart" />
        <LoadingText>Loading...</LoadingText>
      </LoadingContainer>
    </>
  );
}
