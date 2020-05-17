import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity, Image, Platform} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import api from '../services/api';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from '../assets/scaling'
import { TextMask } from 'react-native-masked-text'
import Icons from 'react-native-vector-icons/FontAwesome5';



class Menu extends Component {


    render() {
        return (
            <View style={styles.Container}>
                <View>
                    <TouchableOpacity>
                        <Text>Perfil</Text>
                        <Icons/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text></Text>
                        <Icons/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text></Text>
                        <Icons/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text></Text>
                        <Icons/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text></Text>
                        <Icons/>
                    </TouchableOpacity>
                </View>
            </View >
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
        marginTop: Platform.OS === 'ios' ? scale(35) : scale(25),
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

export default Menu;