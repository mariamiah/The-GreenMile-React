/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdminLanding from '../components/AdminLanding';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FetchPackagesAction from '../actions/FetchPackagesAction';

export class AdminLandingView extends Component {
  componentDidMount() {
    this.props.FetchPackagesAction();
  }

  render() {
    if (this.props.package === []) return null;
    return (
      <div>
        <Header />
        {this.props.package.map(item => <AdminLanding item={item} key={item.package_id} />)}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  package: state.FetchPackagesReducer.Packages,

});
AdminLandingView.propTypes = {
  FetchPackagesAction: PropTypes.func.isRequired,

};
export default connect(mapStateToProps, { FetchPackagesAction })(AdminLandingView);
