import styled, { keyframes } from 'styled-components';

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

export default Circle;
