import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native';
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
        accessToken: '',
    };

    componentDidMount() {
        this.loadCrypto();
        this.getFromStorage();
    }

    loadCrypto = async () => {
        const response = await api.get('/currencies/ticker?key=6ddc22213a53b49c36b5f38de5af8726&ids=BTC,ETH,EOS,XPR,LTC,XLM,USDT,XEM,LTC,BCH,XMR,EOS,DAI,KNC,DASH,ETC,BUSD,BNB&interval=1d&convert=BRL');
        let price = response.data
        console.log("CRYPTOS: " + price)
        this.setState({ prices: price, loading: false })
    };

    getFromStorage = async () => {
        let token = ''
        try {
            token = await AsyncStorage.getItem('accessToken')
        } catch (error) {
            console.log(error)
        }
        console.log('Token na home:', token)
    }

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { Actions.card(item) }}>
            <View style={styles.Card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {console.log("--------------------------------------------------------------")}
                    {console.log("NOME DA CRYPTO: " + item.currency)}
                    {console.log("URL DO LOGO: " + item.logo_url)}
                    {console.log("EXTENSÃO DO LOGO:" + item.logo_url.substr(-3))}
                    {console.log("--------------------------------------------------------------")}
                    {
                        item.logo_url.substr(-3) === "png" ?
                            <Image
                                style={{ height: scale(40), width: scale(40), resizeMode: 'contain' }}
                                source={{ uri: item.logo_url }}
                            />
                            :
                            <SvgUri
                                width={40}
                                height={40}
                                uri={item.logo_url}
                            />
                    }
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
                    <Loading />
                    :
                    <>
                        <View style={styles.Header}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../assets/image/logo.png')} />
                            </View>
                            <TouchableOpacity onPress={() => Actions.menu()}>
                                <Icons name='bars' size={23} style={{ marginLeft: scale(50), color: '#fff' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: scale(5), flex: 1, marginBottom: scale(15) }}>
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
        marginLeft: scale(80),

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