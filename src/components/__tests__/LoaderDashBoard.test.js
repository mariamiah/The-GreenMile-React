/* eslint-disable no-undef */
import ReactDOM from 'react-dom';
import React from 'react';
import LoaderDashboard from '../LoaderDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoaderDashboard />, div);
});
