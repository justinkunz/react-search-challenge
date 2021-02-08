import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  ${({ width = 512 }) => `max-width: ${width}px;`}
`;

export default Container;
