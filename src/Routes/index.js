/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing';
import About from '../components/About';
import Error from '../components/Error';

const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact strict component={Landing} />
                    <Route path="/about" exact strict component={About} />
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
export default Routes;
