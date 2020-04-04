import React, { Component } from 'react';
import {Router, Stack, Scene, Actions } from 'react-native-router-flux';
import Main from './pages/main';
import Card from './pages/Card';
class routes extends Component{
    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene key="Home" renderBackButton={()=>(null)} renderLeftButton={()=>(null)} initial title="CryptoMap" navigationBarStyle={{ backgroundColor: '#5D5B5B' }} titleStyle={{color: '#fff'}} component={Main}/>
                    <Scene key="Card" title="Card" hideNavBar={true} component={Card}/>
                </Scene>
            </Router>
        )
    }
}

export default routes;