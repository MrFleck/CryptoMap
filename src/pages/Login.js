import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, TextInput} from 'react-native';
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
                <View style={styles.Header}>
                    <Image source={require('../assets/image/logo.png')} />
                </View>
                <View style={styles.GroupLogin}>
                    <Text style={styles.TextoBemVindo}>Seja bem-vindo!</Text>
                    <TextInput style={styles.InputUser} placeholder="E-mail ou usuário:" />
                    <TextInput secureTextEntry={true} style={styles.InputPass} placeholder="Senha:" />
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.TextoBotao}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Text style={styles.ForgotIt}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: scale(60) }} onPress={() => Actions.cadastro()}>
                        <Text style={styles.CadastreSe}>Quero me cadastrar!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000000',
    },

    Header: {
        marginTop: Platform.OS === 'ios' ? scale(50) : scale(25),
        alignItems: 'center',
        marginRight: scale(12)
    },

    TextoBemVindo: {
        color: '#fff',
        fontSize: scale(32),
        marginBottom: scale(50),
        fontWeight: "bold",
    },

    GroupLogin: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:scale(50),
    },

    InputUser: {
        width: scale(250),
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: "#fff",
        borderRadius: 5,
        height: scale(35),
        marginBottom: scale(20)
    },

    InputPass: {
        width: scale(250),
        borderColor: '#ccc',
        borderWidth: scale(1),
        backgroundColor: "#fff",
        borderRadius: scale(5),
        height: scale(35),
        marginBottom: scale(30)
    },
        
    Button: {
        width: scale(250),
        backgroundColor: "#ffbc01",
        height: scale(35),
        borderRadius: scale(5),
        marginBottom: scale(20),
        alignItems: 'center',
    },

    TextoBotao: {
        fontSize: scale(20),
        color: '#fff',
        marginTop: scale(4)
    },

    ForgotIt: {
        fontSize:scale(12),
        color: "#fff",
        textAlign: 'center',
    },

    CadastreSe: {
        color: "#ffbc01",
        fontSize:scale(15),
    },
});

export default Login;