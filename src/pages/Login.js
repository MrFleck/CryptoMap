import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, TextInput, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { scale } from '../assets/scaling'
import { LOGIN } from '../services/graphql/mutations/login'
import { withApollo } from 'react-apollo';

class Login extends Component {

    state = {
        email: '',
        senha: '',
        mostraErro: false,
        mensagem: '',

    }


    sendData = () => {
        let emailEnviar = this.state.email
        let senhaEnviar = this.state.senha

        if (emailEnviar == '' || emailEnviar.indexOf('@') == -1 || emailEnviar.indexOf('.') == -1) {
            this.setState({ mensagem: 'você precisa preencher seu e-mail corretamente', mostraErro: true })
        } else if (senhaEnviar == '' || senhaEnviar.length < 6) {
            this.setState({ mensagem: 'você precisa preencher sua senha corretamente, lembre-se ela deve conter acima de 6 caractéres', mostraErro: true })
        } else {
            let paramsEnviar = {
                email: emailEnviar,
                password: senhaEnviar,
            }

            console.log('TO ENVIANDO: ', paramsEnviar)

            this.props.client.mutate({ mutation: LOGIN, errorPolicy: 'all', variables: paramsEnviar }).then(results => {
                if (results.errors) {
                    this.setState({ mensagem: results.errors.message, mostraErro: true })
                    console.log('ERROR: ', results.errors)
                } else if (results.data.login == null) {
                    this.setState({ mensagem: 'Ops...e-mail ou senha inválidos!', mostraErro: true })
                } else {
                    console.log('RESULT: ', results.data.login)
                    let token = results.data.login.accessToken;
                    console.log('--- TO PASSANDO ISSO PRA FUNCAO Q SETA NO STORAGE:', token)
                    this.setStorage(token)
                    this.vaiPraHome();
                }
            })
        }
    }

    setStorage = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            console.log('TO INSERINDO ISSO NO ASYNCSTORAGE: ', jsonValue)
            await AsyncStorage.setItem('accessToken', jsonValue)
        } catch (e) {
            console.log(e)
        }

        console.log('Done.')
    }

    vaiPraHome = () => {
        Actions.home()
    }


    render() {
        return (
            <ScrollView style={styles.Container}>
                <View style={styles.Header}>
                    <Image source={require('../assets/image/logo.png')} />
                </View>
                {this.state.mostraErro &&
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: scale(290), borderRadius: scale(10), borderWidth: scale(4), borderColor: "#ffbc01", padding: scale(15), backgroundColor: '#232324', marginTop: scale(120), zIndex: 1, position: 'absolute' }}>
                            <View style={{ marginLeft: scale(15) }}>
                                <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: scale(14) }}>{this.state.mensagem}</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: scale(95) }}>
                                <TouchableOpacity style={{ borderRadius: scale(10), backgroundColor: '#ffbc01', alignItems: 'center', width: scale(100) }} onPress={() => this.setState({ mostraErro: false })}>
                                    <Text style={{ margin: scale(6), fontWeight: 'bold', fontSize: scale(14), color: '#fff' }}>Ok</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
                <View style={styles.GroupLogin}>
                    <Text style={styles.TextoBemVindo}>Seja bem-vindo!</Text>
                    <TextInput style={styles.InputUser} placeholder="E-mail:" onChangeText={text => this.setState({ email: text })} value={this.state.email} />
                    <TextInput secureTextEntry={true} style={styles.InputPass} placeholder="Senha:" onChangeText={text => this.setState({ senha: text })} value={this.state.senha} />
                    <TouchableOpacity style={styles.Button} onPress={() => this.sendData()}>
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
        marginTop: scale(50),
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
        color: '#000',
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
        fontSize: scale(12),
        color: "#fff",
        textAlign: 'center',
    },

    CadastreSe: {
        color: "#ffbc01",
        fontSize: scale(15),
    },
});


export default withApollo(Login);