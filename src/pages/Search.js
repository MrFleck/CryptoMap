import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';
import { Actions } from 'react-native-router-flux';
import { scale } from '../assets/scaling'
import Icons from 'react-native-vector-icons/FontAwesome5';
import { TextMask } from 'react-native-masked-text';
import { SvgUri } from 'react-native-svg';


class Search extends Component{
    
    state = {
        loading: true,
        prices: [],
    };

    componentDidMount(){
        this.loadCrypto();
    }

    loadCrypto = async () => {
        const response = await api.get('/currencies/ticker?key=6ddc22213a53b49c36b5f38de5af8726&ids=BTC,ETH,XPR&interval=1d&convert=BRL');
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

                    <View style = {{textAlign:'left', width:scale(180)}}>
                        <Text style={styles.CryptoName}>{item.currency}</Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icons name='plus' size={23} style={{ marginRight: scale(1), color: '#fff' }} />
                        </TouchableOpacity>
                    </View>

                </View>
                
                    <View style ={{top:scale(20)}}>
                        <Text style={styles.TextPrice}>Preço:</Text>
                    </View>

                   
                        <TextMask
                            style={styles.CryptoDescription}
                            value={Number(item.price).toFixed(2)}
                            type={'money'}
                        />

            </View>
        </TouchableOpacity>
    )



    render(){
       return( 
        <View style={styles.Container}>

            <View style = {styles.Header}>

                <TouchableOpacity onPress={() => Actions.pop()}>
                    <Icons name='arrow-left' size={23} style={{ marginRight: scale(12), color: '#fff' }} />
                </TouchableOpacity>
            
                <TextInput style ={styles.inputSearch} placeholder="Digite o nome ou o código da moeda" />   

                <TouchableOpacity onPress={() => Actions.pop()}>
                    <Icons name='search' size={23} style={{ marginLeft: scale(12), color: '#fff' }} />
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: scale(5), flex: 1,alignItems:'center' }}>
                <FlatList
                    data={this.state.prices}
                    keyExtractor={item => item.currency}
                    renderItem={this.renderItem}
                    horizontal={false}
                    numColumns={1}
                    style={{ flex: 1, }}
                 />                   
            </View>

            <View style={{ alignItems: 'center', marginBottom:scale(5) }}>
                <Image source = {require('../assets/image/logo.png')} />
            </View> 
                <Text style ={{color:'#fff', fontSize:17, textAlign:'center', marginBottom:scale(10)}}>Sair</Text> 

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
    Text:{
        color:'#fff',
    },

    Header: {
        marginTop: Platform.OS === 'ios' ? scale(50) : scale(25),
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: scale(0),

    },

    inputSearch:{
        backgroundColor:"#fff",
        padding: 10,
        width: scale(250),
        alignItems:'center',
        flex:1,
    },

    Card: {
        borderRadius: scale(5),
        backgroundColor: 'transparent',
        shadowOpacity: scale(15),
        width: scale(290),
        height: scale(100),
        justifyContent: 'space-between',
        marginTop: scale(10),
        padding: scale(15),
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth:1,
    },

    TextPrice:{
        color:'#fff',
        fontSize:scale(15),
        textAlign:'left',
    },

    CryptoName: {
        fontSize: scale(16),
        color: Colors.white,
        backgroundColor: 'transparent',
        textAlign:'left',
        alignItems:'flex-start',
        alignContent:'flex-start',
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
        backgroundColor: 'transparent',
    },
    CryptoDescription: {
        fontSize: scale(16),
        color: Colors.white,
        textAlign:'right',
    },
    Cryptologo: {
        width: scale(80),
        height: scale(80),
        position: 'absolute',
        flex: 1,
    },
});

export default Search;