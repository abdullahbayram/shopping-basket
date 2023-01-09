import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Text from './src/components/Text/Text';
import styles from './App.style';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
