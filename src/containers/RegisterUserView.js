/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import RegisterUser from '../components/RegisterUser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegistrationAction from '../actions/RegisterUserAction';


export class RegisterUserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      role: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.registrationState.payload) {
      this.handleSuccess(nextProps.registrationState);
    }

    if (!nextProps.registrationState.payload) {
      this.handleErrors(nextProps);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.RegistrationAction(this.state);
  }

  handleSuccess(registrationState) {
    if (registrationState.payload.message === 'user successfully created') {
      toast.success(
        <p className="text-white">
          User successfully registered
        </p>,
      );
    }
  }

  handleErrors(props) {
    if (props.registrationState.error) {
      toast.error(
        <p>
          {props.registrationState.error.message}
        </p>,
      );
    }
  }

  render() {
    return (
      <div>
        <Header />
        <RegisterUser onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}
RegisterUserView.propTypes = {
  RegistrationAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  registrationState: state.RegisterUserReducer,
});
export default connect(mapStateToProps, { RegistrationAction })(RegisterUserView);
