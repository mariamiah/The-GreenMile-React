/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Error from '../components/Error';
import AdminLandingView from '../containers/AdminLandingView';
import RegisterUserView from '../containers/RegisterUserView';
import LoaderView from '../containers/LoaderView';

const Routes = () => (
  <BrowserRouter>

    <div>
      <Switch>
        <Route path="/" exact strict component={Home} />
        <Route path="/admindashboard" exact strict component={AdminLandingView} />
        <Route path="/users" exact strict component={RegisterUserView} />
        <Route path="/loaderDashboard" exact strict component={LoaderView} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default Routes;
