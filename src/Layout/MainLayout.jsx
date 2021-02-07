import React, { Fragment } from 'react';
import { Header } from '../Components';
import styled from 'styled-components';

export default function MainLayout({ children }) {
  const Main = styled.main`
    margin: 24px;
  `;
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
    </Fragment>
  );
}
