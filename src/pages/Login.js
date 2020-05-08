import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, TextInput, Button} from 'react-native';
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
            
            <View style={styles.Container}> 
                <View style={{alignItems: 'center' }}>
                    <Image source = {require('../assets/image/logo.png')} />
                </View>
           
                <Text style={{
                    color: '#fff',
                    fontSize: scale(32),
                    marginTop: scale(90),
                    marginBottom: scale(50),
                    fontWeight:"bold",
                }}>Seja bem-vindo!</Text>
                <View style ={styles.GroupLogin}>
                    <TextInput style={styles.InputUser} placeholder="E-mail ou usuário:"/>
                    <TextInput style={styles.InputPass} placeholder="Senha:"/>
                    
                    <Button /*coloquei css do botao la embaixo porém a cor ta pegando daqui inline "color="xxx" */
                    style={styles.Button} title="Entrar" color="#ffbc01" onPress={() => Actions.pop()}> <Text /*aqui estou tentando por o texto no botão porém n to conseguindo*/
                    style={{color: '#000'}}>Entrar</Text>
                    </Button>
                    
                    <Text style={styles.ForgotIt} onPress={() => Actions.pop()}>Esqueci minha senha</Text>
                </View>
            </View >        
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.black,
        padding:50,
    },
    Header: {
        marginTop: Platform.OS === 'ios' ? scale(35) : scale(25),
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
        backgroundColor: Colors.black,
    },
    TextoHeader: {
        color: '#fff',
        fontSize: scale(20),

    },
    TextoIntroducao: {
        color: '#fff',
        fontSize: scale(16),
    },
    TextoValor: {
        fontSize: scale(30),
        color: '#fff',
        marginTop: scale(30),
    },

    InputUser:{
        borderColor: '#ccc',
        borderWidth:1,
        backgroundColor: "#fff",
        borderRadius:5,
        },

    InputPass:{
        borderColor: '#ccc',
        borderWidth:1,
        backgroundColor: "#fff",
        borderRadius:5,
    }, 

    ForgotIt:{
        color:"#fff",
        textAlign:'center',
    },

    Button:{
        backgroundColor: "#ffbc01",
    },

    GroupLogin:{
        width:"100%",
        display:'flex',
        justifyContent: 'space-between',
        flex: 0.5,
    },



});

export default Login;