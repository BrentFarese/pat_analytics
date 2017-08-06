import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import DashboardTable from '../components/DashboardTable/DashboardTable';
import ButtonAppBar from './Navigation/ButtonAppBar';
import Application from './Application/Application';
import { ConnectedRouter } from "react-router-redux";
import { history } from '../store.js'

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route path='/' component={ButtonAppBar} />
        <Route exact path='/dashboard' component={DashboardTable} />
        <Route exact path='/application/:id' component={Application} />
      </div>
    </ConnectedRouter>
    );
}

export default App;
