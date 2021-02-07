import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import images from '../assets';
import { IconButton } from './shared';

const StyledHeader = styled.header`
  border-bottom: 1px solid #efefef;
  padding: 16px;
`;

export default function Header() {
  const history = useHistory();
  const redirectToHome = () => history.push('/');

  return (
    <StyledHeader>
      <IconButton src={images.logo} size={110} alt="match" onClick={redirectToHome} />
    </StyledHeader>
  );
}
