import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LoaderDashboard = () => (
  <div>
    <Header />
    <div id="loader">
      <div className="bgimg">
        <div className="middle">
          <h1>LOADER PAGE COMING SOON</h1>
          <hr />
        </div>
      </div>
    </div>
    <Footer />
  </div>

);
export default LoaderDashboard;
