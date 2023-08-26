import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

// Component styles
const styles = StyleSheet.create({
    componentWrapper: {
        width: '75%'
    },
    buttonContentsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        alignItems: 'center',
        gap: '15vw'
    },
    googleIcon: {
        padding: '10vw'
    },
    buttonText: {
        display: 'flex',
        padding: '1vw'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderWidth: 1,
      borderRadius: 25,
      borderColor: '#757575',
      elevation: 3,
    },
});

// Connects to Google Calendar
async function connectGoogleCalendar() {
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/calendar'], // what API you want to access on behalf of the user, default is email and profile
        iosClientId: "845570352922-chd6r795jt4lk0mog8chvqvev5fhot7q.apps.googleusercontent.com"
    });

    try {
        const userInfo = await GoogleSignin.signIn();
        const accessToken = (await GoogleSignin.getTokens()).accessToken;

        const response = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log(response.status)
        const calendarData = await response.json();
        console.log(calendarData);
    } catch (error) {
        console.log(error);
    }
    const userInfo = await GoogleSignin.signIn();
}

// Functional component
export default function GoogleCalendarConnectButton() {
    return (
        <View style={styles.componentWrapper}>
            <TouchableHighlight underlayColor="#DDDDDD" style={styles.button} onPress={connectGoogleCalendar}>
                <View style={styles.buttonContentsWrapper}>
                    <Icon name="google" size={20} color="#000000" style={styles.googleIcon}/>
                    <Text style={styles.buttonText}>Connect to Google Calendar</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}