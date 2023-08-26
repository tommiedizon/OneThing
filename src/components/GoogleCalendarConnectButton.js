import { Text, Pressable, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

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

function onPressFunction() {

}

// Functional component
export default function GoogleCalendarConnectButton() {
    return (
        <View style={styles.componentWrapper}>
            <Pressable style={styles.button} onPress={onPressFunction}>
                <View style={styles.buttonContentsWrapper}>
                    <Icon name="google" size={20} color="#000000" style={styles.googleIcon}/>
                    <Text style={styles.buttonText}>Connect to Google Calendar</Text>
                </View>
            </Pressable>
        </View>
    )
}