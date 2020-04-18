import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from '../assets/scaling'
import { TextMask } from 'react-native-masked-text'
export default class Card extends Component {


    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <TouchableOpacity style={styles.Header} onPress={() => { Actions.pop() }}>
                        <Feather color='#fff' name='chevron-left' size={26} />
                        <Text style={styles.TextoHeader}>voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Container1}>
                    <View style={{ marginTop: scale(15) }}>
                        <Text style={styles.TextoIntroducao}>Olá, você está na página do Card: {this.props.currency}</Text>
                        <TextMask
                            style= {styles.TextoValor}
                            value={Number(this.props.price).toFixed(2)}
                            type={'money'}
                        />
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        backgroundColor: Colors.black,
    },
    Header: {
        marginTop: scale(25),
        marginLeft: scale(5),
        flexDirection: 'row',
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


});