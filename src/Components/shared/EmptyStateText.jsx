import styled from 'styled-components';

const EmptyStateText = styled.span`
  font-family: 'Open Sans';
  font-size: 22px;
  ${({ bold }) => `font-weight: ${bold ? 600 : 400};`}
`;

export default EmptyStateText;
