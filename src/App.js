import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import GoogleCalendarConnectButton from './components/GoogleCalendarConnectButton';
import GoogleCalendarDateTimePicker from './components/GoogleCalendarDateTimePicker';

export default function App() {

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/calendar'], // what API you want to access on behalf of the user, default is email and profile
    iosClientId: "845570352922-chd6r795jt4lk0mog8chvqvev5fhot7q.apps.googleusercontent.com"
  });

  return (
    <View style={styles.container}>
      <GoogleCalendarDateTimePicker/>
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
