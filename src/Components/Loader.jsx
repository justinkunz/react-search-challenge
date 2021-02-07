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

const Bounce = keyframes`
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const LoadingContainer = styled.div`
  position: relative;
  text-align: center;
  margin: 96px;
`;

const LoadingText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 24px;
  font-family: 'Open Sans', sans-serif;
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  background-color: #1928ef;
  border-radius: 100%;
  display: inline-block;
  animation: ${Bounce} 1.4s infinite ease-in-out both;
  -webkit-animation-delay: ${({ delay }) => `-${delay}s`};
  animation-delay: ${({ delay }) => `-${delay}s`};
`;

export default function Loader() {
  return (
    <LoadingContainer>
      <Circle delay={0.32} />
      <Circle delay={0.16} />
      <Circle delay={1.4} />
    </LoadingContainer>
  );
}
