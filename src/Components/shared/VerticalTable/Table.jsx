import styled from 'styled-components';

const Table = styled.table`
  font-family: 'Open Sans', sans-serif;
  ${({ small }) => `font-size: ${small ? '14px' : '16px'};`}
`;

export default Table;
