import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';
import { Actions } from 'react-native-router-flux';
import { scale } from '../assets/scaling'
import Icons from 'react-native-vector-icons/FontAwesome5';
import { TextMask } from 'react-native-masked-text';
import { SvgUri } from 'react-native-svg';


//Components
import Loading from '../components/Loading'

class Main extends Component {
    state = {
        loading: true,
        prices: [],
    };

    componentDidMount(){
        this.loadCrypto();
    }

    loadCrypto = async () => {
        const response = await api.get('/currencies/ticker?key=6ddc22213a53b49c36b5f38de5af8726&ids=BTC,ETH,XPR,EOS,LTC,XLM,BCH&interval=1d&convert=BRL');
        let price = response.data
        console.log(price)
        this.setState({ prices: price , loading: false})
    };

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { Actions.card(item) }}>
            <View style={styles.Card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
                {this.state.loading ?
                    <Loading mensagem='Estamos puxando os dados das suas cryptos =)'/>
                    :
                    <>
                        <View style={styles.Header}>
                            <View style={{ marginLeft: scale(105), alignItems: 'center' }}>
                                <Image source = {require('../assets/image/logo.png')} />
                            </View>
                            <TouchableOpacity onPress={() => Actions.login()}>
                                <Icons name='bars' size={23} style={{ marginLeft: scale(60), color: '#fff' }} />
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
                    </>
                }
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
    Header: {
        marginTop: Platform.OS === 'ios' ? scale(50) : scale(25),
        flexDirection: 'row',
        alignItems: 'center',
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

export default Main;