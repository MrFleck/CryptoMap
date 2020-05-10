import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Search extends Component{
    
    render(){
       return( 

        <View style={styles.Container}>
            <Text style ={styles.Text}>Pesquisa</Text>
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
});

export default Search;