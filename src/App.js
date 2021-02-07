import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SearchPage, UserProfile } from './Views';
import ProfilesContextProvider from './context/ProfilesContextProvider';
import './styles.css';

function App() {
  return (
    <ProfilesContextProvider>
      <Router>
        <Route path="/" exact>
          <SearchPage />
        </Route>
        <Route path="/profile/:username">
          <UserProfile />
        </Route>
      </Router>
    </ProfilesContextProvider>
  );
}

export default App;
