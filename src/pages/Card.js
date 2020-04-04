import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';
import Feather from 'react-native-vector-icons/Feather';

export default class Card extends Component {




    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <TouchableOpacity style={styles.Header} onPress={() => { Actions.Home() }}>
                        <Feather color='#fff' name='chevron-left' size={26} />
                        <Text style={styles.TextoHeader}>voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Container1}>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.TextoIntroducao}>Olá, você está na página do Card: {this.props.text}</Text>
                        <Text style={styles.TextoValor}>{this.props.price}</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    Header: {
        marginTop: 30,
        marginLeft: 5,
        flexDirection: 'row',
    },
    Container1: {
        marginLeft: 30,
        backgroundColor: Colors.black,
    },
    TextoHeader: {
        color: '#fff',
        fontSize: 20,

    },
    TextoIntroducao: {
        color: '#fff',
        fontSize: 16,
    },
    TextoValor: {
        fontSize: 30,
        color: '#fff',
        marginTop: 30,
    },


});