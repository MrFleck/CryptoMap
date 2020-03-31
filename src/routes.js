import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default createStackNavigator({
    Main
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: Colors.dark,
        }, 
        headerTintColor: "#FFF"
    }
});