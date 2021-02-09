import styled from 'styled-components';

const Flexbox = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  ${({ mb }) => mb && `margin-bottom: 4px`};
  ${({ column }) => column && `flex-direction: column`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-items: ${align}`};
`;

export default Flexbox;
