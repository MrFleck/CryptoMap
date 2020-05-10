import React, { Component } from 'react';
import {Router, Stack, Scene, Actions } from 'react-native-router-flux';

//Screens 
import Main from './pages/main';
import Card from './pages/Card';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Search from './pages/Search';
import Cadastro from './pages/Cadastro';
class routes extends Component{
    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene key='home' hideNavBar={true} component={Main}/>
                    <Scene key='card' hideNavBar={true} component={Card}/>
                    <Scene key='login' initial={true} hideNavBar={true} component={Login}/>
                    <Scene key='menu' hideNavBar={true} component={Menu}/>
                    <Scene key='search' hideNavBar={true} component={Search}/>
                    <Scene key='cadastro' hideNavBar={true} component={Cadastro}/>
                </Scene>
            </Router>
        )
    }
}

export default routes;