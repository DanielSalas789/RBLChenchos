import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,image } from 'react-native';
import icon from './assets/icon.png';
// imagenes 


export default function App() {
  return (
    <View style={styles.container}>
      <image source={icon} style={{width: 200, height: 200}} />
      <Text>Restaurante Bar Los Chenchos La nueva Era</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
