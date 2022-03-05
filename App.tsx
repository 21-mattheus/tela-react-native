import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import HomeScreen from './src/screens/home';
import { Homescreen } from './src/screens/home';

export default function App() {
  return (<Homescreen/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EBE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
