import { StatusBar } from 'react-native';

const plataforma = Platform.OS === 'ios' ? 'ios': 'android'


StatusBar.setBarStyle("light-content");

if (plataforma === 'android'){
    StatusBar.setBackgroundColor("#000000")
}
