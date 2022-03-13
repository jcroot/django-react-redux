import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from "./layout/Header";
import Dashboard from "./people/Dashboard";
import Alerts from "./layout/Alerts";
import Login from './auth/Login';
import Register from './auth/Register';
import PrivateRoute from './common/PrivateRoute';

import {Provider} from "react-redux";
import store from "../store";
import {loadUser} from '../actions/auth';

//Alert options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header/>
                            <Alerts/>
                            <div className="container">
                                <Routes>
                                    <Route exact path="/dashboard" element={<PrivateRoute component={Dashboard}/>}/>
                                    <Route exact path="/register" element={<Register/>}/>
                                    <Route exact path="/login" element={<Login/>}/>
                                </Routes>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));