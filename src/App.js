import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import { CloseButton, Sidebar, PageLink, Content } from './components';
import DataProvider from './providers/data/Provider';
import * as Pages from './pages';
import useEvent from './hooks/useEvent';
import useApi from './hooks/useApi';
import { hideUI } from './api/misc';
import { GetParentResourceName } from './fivem';

import './styles/App.scss';

const App = () => {
  const [showUI, setShowUI] = useState(process.env.NODE_ENV === 'development' ? true : false);
  useEvent("ToggleUI", (data) => {
    setShowUI(data.state);
  })

  const hideUI = () => {
    fetch(`https://${GetParentResourceName()}/hide-ui`);
    setShowUI(false);
  }

  return (
    <DataProvider>
      <Router>
        <div className="App" style={{ 'display': showUI === true ? "" : "none" }}>
          <CloseButton className="CloseButton--App" onClick={hideUI} />
          <Sidebar className="sidebar">
            <PageLink exact to="/" icon="home">
              Home
            </PageLink>
            <PageLink exact to="/reports" icon="clipboard">
              Reports
            </PageLink>
            <PageLink exact to="/incidents" icon="flag">
              Incidents
            </PageLink>
            <PageLink exact to="/persons" icon="users">
              Persons
            </PageLink>
            <PageLink exact to="/vehicles" icon="car">
              Vehicles
            </PageLink>
            <PageLink exact to="/warrants" icon="exclamation-triangle">
              Warrants
            </PageLink>
            <PageLink exact to="/armoury" icon="exchange-alt">
              Armoury
            </PageLink>
           
          </Sidebar>
          <Content>
            <CacheSwitch>
              <CacheRoute exact path="/">
                <Pages.Home />
              </CacheRoute>
              <CacheRoute exact path="/reports">
                <Pages.Reports />
              </CacheRoute>
              <CacheRoute exact path="/incidents">
                <Pages.Incidents />
              </CacheRoute>
              <CacheRoute exact path="/persons">
                <Pages.Persons />
              </CacheRoute>
              <CacheRoute exact path="/vehicles">
                <Pages.Vehicles />
              </CacheRoute>
              <CacheRoute exact path="/warrants">
                <Pages.Warrants />
              </CacheRoute>
              <CacheRoute exact path="/armoury">
                <Pages.Armoury />
              </CacheRoute>
              
            </CacheSwitch>
          </Content>
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
