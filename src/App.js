import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Search, Profile, Layout } from './Components';
import { PageNotFound } from './Components/EmptyStates';
import { DocumentTitle } from './Components/Shared';
import { ToastContainer } from 'react-toastify';
import ProfilesContextProvider from './context/ProfilesContextProvider';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

function App() {
  return (
    <ProfilesContextProvider>
      <Router>
        <ToastContainer autoClose={3000} closeOnClick hideProgressBar />
        <Layout>
          <Switch>
            <Route path="/" exact>
              <DocumentTitle title="Match | Meet Someone New" />
              <Search />
            </Route>
            <Route path="/profile/:username" exact>
              <DocumentTitle title="Match | User Profile" />
              <Profile />
            </Route>
            <Route path="*">
              <DocumentTitle title="Match | Page Not Found" />
              <PageNotFound />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ProfilesContextProvider>
  );
}

export default App;
