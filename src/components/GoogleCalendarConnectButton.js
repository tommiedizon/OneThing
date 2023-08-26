import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
// import GoogleAuth from 'google-auth-library';
// import GoogleApis from "googleapis";
// Importing for Google Authentication
// const authenticate = require('@google-cloud/local-auth');
// const google = require('googleapis');
// const process = require('process');
// const path = require('path');
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
// const SCOPES = ["https://www.googleapis.com/auth/calendar.addons.execute"]
// const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

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
        scopes: ['https://www.googleapis.com/auth/calendar.addons.execute'], // what API you want to access on behalf of the user, default is email and profile
        iosClientId: "845570352922-chd6r795jt4lk0mog8chvqvev5fhot7q.apps.googleusercontent.com"
    });

    const userInfo = await GoogleSignin.signIn();
    // client = await authenticate({
    //     scopes: SCOPES,
    //     keyfilePath: CREDENTIALS_PATH,
    // });
    // if (client.credentials) {
    // await saveCredentials(client);
    // }

    // const auth = new GoogleAuth({
    //     scopes: 'https://www.googleapis.com/auth/calendar.addons.execute'
    // });

    // const client = await auth.getClient();
    // const projectId = await auth.getProjectId();
    // const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
    // const res = await client.request({ url });
    // console.log(res.data);
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