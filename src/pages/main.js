import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {
    state = {
        prices: [],
    };

    componentDidMount() {
        this.loadCrypto();
    }

    loadCrypto = async () => {
        const response = await api.get('/currencies/ticker?key=6ddc22213a53b49c36b5f38de5af8726&ids=BTC,ETH,XPR,EOS,LTC,XLM,BCH&interval=1d&convert=BRL');

        const prices = response.data;
        console.log(prices)
        this.setState({ prices })

    };

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { Actions.Card({ text: item.currency, price: item.price }) }}>
            <View style={styles.Card}>
                <Image style={styles.Cryptologo} source={{ uri: item.logo_url }} />
                <Text style={styles.CryptoName}>{item.currency}</Text>
                <Text style={styles.CryptoDescription}>{item.price}</Text>
                {console.log(item.logo_url)}
            </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <View style={styles.Container}>
                <View style={{ marginTop: 35, marginLeft: 140 }}>
                    <Text style={{ color: '#fff', fontSize: 28 }}>CryptoMap</Text>
                </View>
                <View style={{marginTop:5, flex:1,}}>
                    <FlatList
                        data={this.state.prices}
                        keyExtractor={item => item.currency}
                        renderItem={this.renderItem}
                        horizontal={false}
                        numColumns={2}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    Card: {
        borderRadius: 8,
        backgroundColor: '#5D5B5B',
        shadowOpacity: 15,
        width: 190,
        height: 120,
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 5,
        marginTop: 10,
        padding: 20,
    },
    CryptoName: {
        fontSize: 16,
        color: Colors.white,
        backgroundColor: 'transparent'
    },
    CryptoPrice: {
        fontSize: 15,
        color: Colors.black,
        marginHorizontal: 10,
        backgroundColor: 'transparent'
    },
    CryptoPriceNumber: {
        fontSize: 20,
        color: Colors.black,
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: 'transparent'
    },
    CryptoDescription: {
        fontSize: 12,
        color: Colors.white,
    },
    Cryptologo: {
        width: 80,
        height: 80,
        position: 'absolute',
        flex: 1,
    },
});