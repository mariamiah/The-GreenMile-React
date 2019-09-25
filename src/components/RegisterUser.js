/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

const RegisterUser = props => (
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-3" id="signin">
          <div className="card-body">
            <h5 className="card-title text-center"><strong>ADD NEW USER</strong></h5>
            <form className="form-signin" onSubmit={props.onSubmit}>
              <div className="form-label-group">
                <input type="text" id="inputText" className="form-control" placeholder="Username" required autoFocus name="username" onChange={props.onChange} />
                <label htmlFor="inputText">Username</label>
              </div>
              <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="email" required name="email" onChange={props.onChange} />
                <label htmlFor="inputEmail">Email</label>
              </div>
              <div className="form-label-group">
                <input type="text" id="inputRole" className="form-control" placeholder="role" required name="role" onChange={props.onChange} />
                <label htmlFor="inputRole">Role</label>
              </div>
              <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" onChange={props.onChange} />
                <label htmlFor="inputPassword">Password</label>
              </div>
              <div className="form-label-group">
                <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" required name="confirm_password" onChange={props.onChange} />
                <label htmlFor="inputConfirmPassword">Confirm Password</label>
              </div>

              <button className="btn btn-lg btn-success btn-block text-uppercase" type="submit">Register User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default RegisterUser;
