import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GoogleCalendarConnectButton from './components/GoogleCalendarConnectButton';

export default function App() {
  return (
    <View style={styles.container}>
      <GoogleCalendarConnectButton />
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
