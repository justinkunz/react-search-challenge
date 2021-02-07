import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => '1fr '.repeat(props.columnCount).trim()};
  grid-gap: 16px;
`;

export default Grid;
