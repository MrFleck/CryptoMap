import React, { Component } from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

//Screens 
import Main from './pages/main';
import Card from './pages/Card';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Search from './pages/Search';
import Cadastro from './pages/Cadastro';
class routes extends Component {
    state = {
        token: false
    }


    componentDidMount() {
        this.getStorage()
    }

    getStorage = async () => {
        let token = ''
        try {
            token = await AsyncStorage.getItem('accessToken')
        } catch (error) {
            console.log(error)
        }
        if (token) {
            this.setState({token: true})
        }
    }


    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key='home' initial ={this.state.token ? true : false } hideNavBar={true} component={Main} />
                    <Scene key='card' hideNavBar={true} component={Card} />
                    <Scene key='login' initial={this.state.token? false : true} hideNavBar={true} component={Login} />
                    <Scene key='menu' hideNavBar={true} component={Menu} />
                    <Scene key='search' hideNavBar={true} component={Search} />
                    <Scene key='cadastro' hideNavBar={true} component={Cadastro} />
                </Scene>
            </Router>
        )
    }
}

export default routes;