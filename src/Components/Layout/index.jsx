import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import images from '../../assets';
import Header from './Header';
import Main from './Main';
import { IconButton } from '../Shared';

export default function Layout({ children }) {
  const history = useHistory();
  const redirectToHome = () => history.push('/');

  return (
    <Fragment>
      <Header>
        <IconButton src={images.logo} size={110} alt="match" onClick={redirectToHome} />
      </Header>
      <Main>{children}</Main>
    </Fragment>
  );
}
