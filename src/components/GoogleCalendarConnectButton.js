import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

// Component styles
const styles = StyleSheet.create({
    componentWrapper: {
        width: '85%'
    },
    buttonContentsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        alignItems: 'center',
        gap: 10
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
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 25,
      borderColor: '#757575',
      elevation: 3,
    },
});

// Connects to Google Calendar
async function connectGoogleCalendar() {
    try {
        // Sign user in and obtain access token
        await GoogleSignin.signIn();
        // const response = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`
        //     }
        // });

        // const calendarData = await response.json();
    } catch (error) {
        console.log(error);
    }
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