import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: "CryptoMap"
    };

    state = {
        docs: [],
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;

        this.setState({ docs })
    };

    renderItem = ({ item }) => (
        <View style={styles.AllBody, {flexDirection: 'row'}}>
            <View style={styles.Card}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Text>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )



    render() {
        return (
            <ScrollView style={styles.AllBody}>
                <View style={styles.AllBody, { flexDirection: 'row' }}>
                    <FlatList
                        data={this.state.docs}
                        keyExtractor={item => item._id}
                        renderItem={this.renderItem}
                        horizontal ={false}
                        numColumns = {2}
                    />
                    {/* <View style={styles.Card}>
                            <View>
                                <Text style = {styles.CryptoName}>BTC</Text>
                            </View>
                            <View>
                                <Text style = {styles.CryptoPrice}>Price:</Text>
                            </View>
                            <View style ={{flexDirection: 'row', alignItems: "center"}}>
                                <Text style = {styles.CryptoPriceNumber}>11.873,65</Text>
                                <Text style ={styles.CryptoPriceNumber}>4.98% </Text>
                            </View>
                        </View> */}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    AllBody: {
        backgroundColor: Colors.black,
        display: "flex",
    },
    Card: {
        borderRadius: 13,
        backgroundColor: '#5D5B5B',
        shadowOpacity: 15,
        width: 170,
        height: 120,
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginTop: 10,
    },
    CryptoName: {
        fontSize: 20,
        color: Colors.black,
        marginHorizontal: 10,
        marginTop: 5,
    },
    CryptoPrice: {
        fontSize: 15,
        color: Colors.black,
        marginHorizontal: 10,
    },
    CryptoPriceNumber: {
        fontSize: 20,
        color: Colors.black,
        marginHorizontal: 10,
        marginBottom: 10
    },

});