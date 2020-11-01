import React, { Component } from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { AsyncStorage, View, Text, ActivityIndicator } from 'react-native';

//Screens 
import Main from './pages/main';
import Card from './pages/Card';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Search from './pages/Search';
import Cadastro from './pages/Cadastro';
class routes extends Component {
    state = {
        loading: true,
        token: false
    }


    componentDidMount() {
        this.getStorage()
    }


    renderLoading() {
        return (
            <View style={{ backgroundColor: '#000000' }}>
                <ActivityIndicator color='#ffffff' />
            </View>
        );
    }

    getStorage = async () => {
        let token = ''
        try {
            token = await AsyncStorage.getItem('accessToken')
        } catch (error) {
            console.log(error)
        }
        if (token) {
            this.setState({ token: true, loading: false })
        } else {
            this.setState({ loading: false })
        }

    }


    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key='home' initial={this.state.token ? true : false} hideNavBar={true} component={Main} gesturesEnabled={false} />
                    <Scene key='card' hideNavBar={true} component={Card} />
                    <Scene key='login' initial={this.state.token ? false : true} hideNavBar={true} component={Login} gesturesEnabled={false} />
                    <Scene key='menu' hideNavBar={true} component={Menu} />
                    <Scene key='search' hideNavBar={true} component={Search} />
                    <Scene key='cadastro' hideNavBar={true} component={Cadastro} />
                </Scene>
            </Router>
        )
    }
}

export default routes;