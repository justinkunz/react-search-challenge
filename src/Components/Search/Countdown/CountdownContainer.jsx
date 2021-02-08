import styled from 'styled-components';

const CountdownContainer = styled.div`
  position: absolute;
  left: 8px;
  font-size: 12px;

  @media (max-width: 520px) {
    position: unset;
  }
`;

export default CountdownContainer;
