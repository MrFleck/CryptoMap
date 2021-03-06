import React, { Component } from 'react';
import {Router, Stack, Scene, Actions } from 'react-native-router-flux';
//Screens 
import Main from './pages/main';
import Card from './pages/Card';
import Login from './pages/Login'
class routes extends Component{
    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene key='home' hideNavBar={true} component={Main}/>
                    <Scene key='card' hideNavBar={true} component={Card}/>
                    <Scene key='login' hideNavBar={true} component={Login}/>
                </Scene>
            </Router>
        )
    }
}

export default routes;