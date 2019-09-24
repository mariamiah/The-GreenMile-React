/* eslint-disable max-len */
import React, { Component } from 'react';

export default class LandingPage extends Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <div className="card card-signin my-2" id="signin">
                            <div className="card-body">
                                <h5 className="card-title text-center"><strong>THE GREEN MILE</strong></h5>
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputText" className="form-control" placeholder="Username" required autoFocus name="username" />
                                        <label htmlFor="inputText">Username</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password"/>
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                    </div>
                                    <button className="btn btn-lg btn-success btn-block text-uppercase" type="submit">Sign in</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

