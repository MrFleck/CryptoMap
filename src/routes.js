import React, { Component } from 'react';
import {Router, Stack, Scene, Actions } from 'react-native-router-flux';
import Main from './pages/main';
import Card from './pages/Card';
class routes extends Component{
    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene key="Home" hideNavBar={true} component={Main}/>
                    <Scene key="Card" hideNavBar={true} component={Card}/>
                </Scene>
            </Router>
        )
    }
}

export default routes;