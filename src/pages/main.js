import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';
import { Actions } from 'react-native-router-flux';
import { scale } from '../assets/scaling'
import Icons from 'react-native-vector-icons/FontAwesome5';
import { TextMask } from 'react-native-masked-text';
import { SvgUri } from 'react-native-svg';

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
        <TouchableOpacity onPress={() => { Actions.card(item) }}>
            <View style={styles.Card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* <Icons name={item.name.toLowerCase()} size={32} style={{ color: '#fff' }} /> */}
                    <SvgUri
                        width={40}
                        height={40}
                        uri={item.logo_url}
                    />
                    <Text style={styles.CryptoName}>{item.currency}</Text>
                </View>
                <TextMask
                    style={styles.CryptoDescription}
                    value={Number(item.price).toFixed(2)}
                    type={'money'}
                />
            </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <View style={styles.Container}>
                <View style={{ flexDirection: 'row', marginTop: scale(40), alignItems: 'flex-end' }}>
                    <View style={{ marginLeft: scale(105), alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: scale(28) }}>CryptoMap</Text>
                    </View>
                    <TouchableOpacity onPress={() => Actions.login()}>
                        <Icons name='user' size={23} style={{ marginLeft: scale(60), color: '#fff' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: scale(5), flex: 1, }}>
                    <FlatList
                        data={this.state.prices}
                        keyExtractor={item => item.currency}
                        renderItem={this.renderItem}
                        horizontal={false}
                        numColumns={2}
                        style={{ flex: 1, }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000000'
    },
    Card: {
        borderRadius: scale(5),
        backgroundColor: '#5D5B5B',
        shadowOpacity: scale(15),
        width: scale(160),
        height: scale(120),
        justifyContent: 'space-between',
        marginLeft: scale(10),
        marginRight: scale(0),
        marginTop: scale(10),
        padding: scale(15),
    },
    CryptoName: {
        fontSize: scale(16),
        color: Colors.white,
        backgroundColor: 'transparent'
    },
    CryptoPrice: {
        fontSize: scale(15),
        color: Colors.black,
        marginHorizontal: scale(10),
        backgroundColor: 'transparent'
    },
    CryptoPriceNumber: {
        fontSize: scale(20),
        color: Colors.black,
        marginHorizontal: scale(10),
        marginBottom: scale(10),
        backgroundColor: 'transparent'
    },
    CryptoDescription: {
        fontSize: scale(16),
        color: Colors.white,
    },
    Cryptologo: {
        width: scale(80),
        height: scale(80),
        position: 'absolute',
        flex: 1,
    },
});
