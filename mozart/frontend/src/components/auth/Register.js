import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navigate} from "react-router";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../actions/auth';
import {createMessage} from '../../actions/messages';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {username, email, password, password2} = this.state;
        if (password !== password2) {
            this.props.createMessage({passwordNotMatch: 'Passwords do not match'});
        } else {
            const newUser = {
                username,
                password,
                email,
            };
            this.props.register(newUser);
        }
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        if (this.props.isAuthenticated) {
            return <Navigate to="/"/>;
        }
        const {username, email, password, password2} = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group row mb-3">
                            <label className="col-md-4 control-label text-end">Username</label>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    onChange={this.onChange}
                                    value={username}
                                    autoFocus
                                />
                            </div>

                        </div>
                        <div className="form-group row mb-3">
                            <label className="col-md-4 control-label text-end">Email</label>
                            <div className="col-md-8">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={this.onChange}
                                    value={email}
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label className="col-md-4 control-label text-end">Password</label>
                            <div className="col-md-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={this.onChange}
                                    value={password}
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label className="col-md-4 control-label text-end">Confirm Password</label>
                            <div className="col-md-8">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password2"
                                    onChange={this.onChange}
                                    value={password2}
                                />
                            </div>
                        </div>
                        <div className="form-group text-end">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p className="text-start">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {register, createMessage})(Register);