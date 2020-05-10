import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from '../assets/scaling'
import { TextMask } from 'react-native-masked-text'
import { SvgUri } from 'react-native-svg';


class Login extends Component {

    render() {
        return (
                <ScrollView style={styles.Container}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../assets/image/logo.png')} />
                    </View>

                    <Text style={styles.TextoHeader}>Seja bem-vindo!</Text>
                    <View style={styles.GroupLogin}>
                        <TextInput style={styles.InputUser} placeholder="E-mail ou usuário:" />
                        <TextInput secureTextEntry={true} style={styles.InputPass} placeholder="Senha:" />
                        <TouchableOpacity style={styles.Button}>
                            <Text style={styles.TextoBotao}>Entrar</Text>
                        </TouchableOpacity>
                        <Text style={styles.ForgotIt} onPress={() => Actions.pop()}>Esqueci minha senha</Text>
                    </View>
                </ScrollView >
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        // alignItems: 'center',
        flex: 1,
        backgroundColor: '#000000',
        padding: scale(50),
    },
    Header: {
        marginTop: Platform.OS === 'ios' ? scale(50) : scale(25),
        marginLeft: scale(5),
        flexDirection: 'row',
    },

    Cryptologo: {
        width: scale(80),
        height: scale(80),
        position: 'absolute',
        flex: 1,
    },

    Container1: {
        marginLeft: scale(30),
        backgroundColor: '#000000',
    },
    TextoHeader: {
        color: '#fff',
        fontSize: scale(32),
        marginTop: scale(90),
        marginBottom: scale(50),
        fontWeight: "bold",
    },

    TextoBotao: {
        fontSize: scale(20),
        color: '#fff',
        marginTop: scale(4)
    },

    InputUser: {
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: "#fff",
        borderRadius: 5,
        height: scale(35),
        marginBottom: scale(20)
    },

    InputPass: {
        borderColor: '#ccc',
        borderWidth: scale(1),
        backgroundColor: "#fff",
        borderRadius: scale(5),
        height: scale(35),
        marginBottom: scale(30)
    },

    ForgotIt: {
        color: "#fff",
        textAlign: 'center',
    },

    Button: {
        backgroundColor: "#ffbc01",
        height: scale(35),
        borderRadius: scale(5),
        marginBottom: scale(20),
        alignItems: 'center',
    },

    GroupLogin: {
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between',
    },

});

export default Login;