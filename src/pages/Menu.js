import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from '../assets/scaling'
import { TextMask } from 'react-native-masked-text'
import Icons from 'react-native-vector-icons/FontAwesome5';



class Menu extends Component {


    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Text style={styles.TextoHeader}>Menu</Text>
                </View>
                <View style={styles.Container1}>
                    <View>
                        <TouchableOpacity style={styles.Opcoes}>
                            <Icons name="search-dollar" color="#fff" size={30} solid />
                            <Text style={styles.TextoIntroducao}>Pesquisar</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Opcoes}>
                            <Icons name="user" color="#fff" size={30} solid />
                            <Text style={styles.TextoIntroducao}>Perfil</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Opcoes}>
                            <Icons name="sticky-note" color="#fff" size={30} solid />
                            <Text style={styles.TextoIntroducao}>Termos e Condições</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Opcoes}>
                            <Icons name="key" color="#fff" size={30} solid />
                            <Text style={styles.TextoIntroducao}>Alterar senha</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { AsyncStorage.clear(); Actions.login() }} style={styles.Opcoes}>
                            <Icons name="sign-out-alt" color="#fff" size={30} />
                            <Text style={styles.TextoIntroducao}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000',
    },
    Header: {
        marginTop: Platform.OS === 'ios' ? scale(35) : scale(25),
        marginLeft: scale(5),
        alignItems: 'center',
    },
    Container1: {
        marginTop: scale(30),
        marginLeft: scale(30),
        backgroundColor: '#000',
    },
    TextoHeader: {
        color: '#fff',
        fontSize: scale(20),

    },
    TextoIntroducao: {
        color: '#fff',
        fontSize: scale(22),
        marginLeft: scale(10)
    },
    Opcoes: {
        marginTop: scale(40),
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default Menu;