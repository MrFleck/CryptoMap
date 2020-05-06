import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native';
import { scale } from '../assets/scaling';

const loading = require("../assets/image/loading.gif");

class Loading extends Component {


    state = {
        mensagem: this.props.mensagem
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={loading} />
                <Text style={styles.texto}>{this.state.mensagem}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        fontFamily: 'Avenir Medium',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    texto: {
        height: '10.19%',
        width: scale(230),
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 26.5,
        textAlign: 'center',
    },
    cappi: {
        height: '20.26%',
        width: '100%',
        position: "absolute",
        bottom: 0
    }
});

export default Loading;
