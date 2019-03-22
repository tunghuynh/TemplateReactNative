import React from 'react';
import Main from './app/views/Main';
import Login from './app/views/login';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="loginScreen"
                           component={Login}
                           animation='fade'
                           hideNavBar={true}
                           initial={true}
                    />
                    <Scene key="mainScreen"
                           component={Main}
                           animation='fade'
                           hideNavBar={true}
                    />
                </Scene>
            </Router>
        );
    }
}