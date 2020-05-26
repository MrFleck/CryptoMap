import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Image, Platform, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from '../assets/scaling'
import { TextMask } from 'react-native-masked-text'
import Icons from 'react-native-vector-icons/FontAwesome5';
import { CREATE_USER } from '../services/graphql/mutations/creatUser'
import { withApollo } from 'react-apollo';


class Cadastro extends Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        confirmaSenha: '',
        escondeSenha: true,
        escondeConfirmaSenha: true,
        mostraErro: false,
        mensagem: '',
    }

    Cadastrar = () => {
        let nomeEnviar = this.state.nome
        let emailEnviar = this.state.email
        let senhaEnviar = this.state.senha
        let confirmaSenha = this.state.confirmaSenha

        console.log('nomeEnviar: ', nomeEnviar)
        if (nomeEnviar == '' || nomeEnviar.length < 3) {
            this.setState({ mostraErro: true, mensagem: 'Insira um nome válido' })
        } else if (emailEnviar.indexOf(".") == -1 || emailEnviar.indexOf("@") == -1) {
            this.setState({ mostraErro: true, mensagem: 'Insira um email válido' })
        } else if (senhaEnviar == '' || senhaEnviar.length < 6 ) {
            this.setState({ mostraErro: true, mensagem: 'ops, a senha precisa ter mais de 6 caractéres' })
        } else if (senhaEnviar != confirmaSenha) {
            this.setState({ mostraErro: true, mensagem: 'As senhas não conferem' })
        } else {
            let paramsEnviar = {
                nome: nomeEnviar,
                email: emailEnviar,
                password: senhaEnviar,
            }

            console.log('TO ENVIANDO: ', paramsEnviar)

            this.props.client.mutate({ mutation: CREATE_USER, errorPolicy: 'all', variables: paramsEnviar }).then(results => {
                console.log('RESULT', results.data)
                this.setState({ mostraErro: true, mensagem: 'Cadastrado com sucesso' })
            })
        }
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
                    <View style={{ marginLeft: scale(50) }}>
                        <Text style={styles.TextoInformativo}>Nome</Text>
                        <TextInput style={styles.Inputs} onChangeText={(texto) => this.setState({ nome: texto })} placeholder="Digite seu nome" value={this.state.nome} />
                        <Text style={styles.TextoInformativo}>E-mail</Text>
                        <TextInput style={styles.Inputs} onChangeText={(texto) => this.setState({ email: texto })} placeholder="Digite seu e-mail" value={this.state.email} />
                        <Text style={styles.TextoInformativo}>Senha</Text>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={(texto) => this.setState({ senha: texto })}
                            style={styles.Inputs} placeholder="Digite sua senha:" value={this.state.senha} />
                        <Text style={styles.TextoInformativo}>Confirme sua senha</Text>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={(texto) => this.setState({ confirmaSenha: texto })}
                            style={styles.Inputs} placeholder="Confirme sua senha:" value={this.state.confirmaSenha} />
                        <TouchableOpacity style={styles.Button} onPress={() => { this.Cadastrar() }}>
                            <Text style={styles.TextoBotao}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ marginTop: scale(30) }} onPress={() => Actions.pop()}>
                        <Text style={styles.ForgotIt}>Já tem conta? clique aqui</Text>
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

    TextoHeader: {
        color: '#fff',
        fontSize: scale(32),
        marginTop: scale(70),
        marginBottom: scale(50),
        fontWeight: "bold",
    },

    GroupLogin: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: scale(30)
    },

    TextoInformativo: {
        fontSize: scale(12),
        color: '#fff',
        marginBottom: scale(3),
    },

    Inputs: {
        width: scale(250),
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: "#fff",
        borderRadius: 5,
        height: scale(35),
        marginBottom: scale(20)
    },

    Button: {
        marginTop: scale(10),
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

export default withApollo(Cadastro);