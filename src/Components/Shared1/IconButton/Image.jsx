import styled from 'styled-components';

const Image = styled.img`
  width: ${({ size }) => `${size}px`};
  ${({ disabled }) => disabled && 'opacity: 0.5'};
`;

export default Image;
