import styled from 'styled-components';

const Flexbox = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  ${(props) => props.justify && `justify-content: ${props.justify}`};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.direction && `flex-direction: ${props.direction}`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}px`};
`;

export default Flexbox;
