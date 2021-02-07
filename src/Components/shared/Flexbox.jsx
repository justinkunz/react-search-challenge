import styled from 'styled-components';

const Flexbox = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'unset'};
  align-items: ${(props) => props.align || 'unset'};
  position: relative;
  ${(props) => props.justify && `justify-content: ${props.justify}`};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.direction && `flex-direction: ${props.direction}`};
  ${(props) => props.m && `margin: ${props.m}px`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}px`};
`;

export default Flexbox;
