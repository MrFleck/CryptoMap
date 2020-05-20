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
        moedas: [
            {name: "bitcoin", valor:"1000"},
            {name: "eth", valor:"1000"},
            {name: "xpr", valor:"1000"},
        ]
    };


    lista = () => {
      return this.state.moedas.map(infos => {
            return (
                <View>
                    <Text style ={{color:"#fff"}}>{infos.name}</Text>
                </View>
            );
        });
        };

    render(){
       return (
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

            <View>
                {this.lista()}
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
        backgroundColor: '#000'
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