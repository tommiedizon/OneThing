import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import GoogleCalendarConnectButton from './components/GoogleCalendarConnectButton';
import GoogleCalendarDateTimePicker from './components/GoogleCalendarDateTimePicker';
import OneThing from './OneThing';
import SignInScreen from './SignInScreen';
import Emoji from './Emoji';
import Time from './Time';
import Home from './Home';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/calendar'], // what API you want to access on behalf of the user, default is email and profile
    iosClientId: "845570352922-chd6r795jt4lk0mog8chvqvev5fhot7q.apps.googleusercontent.com"
  });

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OneThing" component={OneThing} options={{ headerShown: false }}  />
          <Stack.Screen name="EmojiSelector" component={Emoji} options={{ headerShown: false }}  />
          <Stack.Screen name="Scheduler" component={Time} options={{ headerShown: false }}  />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
        </Stack.Navigator>
    </NavigationContainer>
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
