import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/calendar'], // what API you want to access on behalf of the user, default is email and profile
    iosClientId: "845570352922-chd6r795jt4lk0mog8chvqvev5fhot7q.apps.googleusercontent.com"
  });

  return (
    <View style={styles.container}>
      <GoogleCalendarDateTimePicker/>
      <GoogleCalendarConnectButton />
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
  name: {
    position: 'absolute',
    top: 66,
    left: 35
  },
  centerContent: {
    flexDirection: 'column',
    gap: 30
  },
  endButton: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#232244',
    width: 75,
    height: 30,
    justifyContent: 'center',
    left: 140,
    marginBottom: 10
  }
});
