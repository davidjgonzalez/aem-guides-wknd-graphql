/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './images/wknd-logo-dk.svg';

import { PathUtils } from '@adobe/aem-spa-page-model-manager';

/* React Core Component proxies */
import { AEMImage, AEMTeaser, AEMList, AEMSeparator, AEMText, AEMTitle } from './components/core-components/AEMComponents';

import AdventureDetail from './components/AdventureDetail';
import Home from './components/Home';

import './App.scss';

const { REACT_APP_HOST_URI, REACT_APP_AEM_PROJECT_ROOT } = process.env;

function App() {
  // Transform routing path to accomodate for AEM specific paths
  // path updated only when opened within AEM editor
  const transformRoute = (path) => {
    const aemPathRegex = PathUtils.toAEMPath(path, REACT_APP_HOST_URI, REACT_APP_AEM_PROJECT_ROOT);
    return aemPathRegex;
  };

  return (
    <Router>
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="WKND Logo"/>
          <hr />
        </header>
      <Switch>
        <Route path={transformRoute('/adventures/:path')}>
          <AdventureDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
