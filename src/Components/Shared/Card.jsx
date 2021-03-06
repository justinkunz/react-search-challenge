import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: 0 3px 6px lightgray, 0 3px 6px;
  overflow: hidden;
  ${({ pad }) => pad && 'padding: 6px 12px'}
`;

export default Card;
