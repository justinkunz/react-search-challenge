import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchPage, UserProfile } from './Views';
import { PageNotFound } from './Components/EmptyStates';
import { DocumentTitle } from './Components';
import { ToastContainer } from 'react-toastify';
import { MainLayout } from './Layout';
import ProfilesContextProvider from './context/ProfilesContextProvider';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

function App() {
  return (
    <ProfilesContextProvider>
      <Router>
        <ToastContainer autoClose={3000} closeOnClick hideProgressBar />
        <MainLayout>
          <Switch>
            <Route path="/" exact>
              <DocumentTitle title="Match | Profile Search" />
              <SearchPage />
            </Route>
            <Route path="/profile/:username" exact>
              <DocumentTitle title="Match | User Profile" />
              <UserProfile />
            </Route>
            <Route path="*">
              <DocumentTitle title="Match | Page Not Found" />
              <PageNotFound />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </ProfilesContextProvider>
  );
}

export default App;
