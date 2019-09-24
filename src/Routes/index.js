/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Error from '../components/Error';
import Navigation from '../components/Navigation';

const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/" exact strict component={Home} />
                    <Route path="/about" exact strict component={About} />
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
export default Routes;
