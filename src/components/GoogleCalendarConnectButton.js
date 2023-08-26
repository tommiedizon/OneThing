import { Text, Pressable, StyleSheet } from "react-native";

// Component styles
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderWidth: 1,
      borderRadius: 25,
      borderColor: '#757575',
      elevation: 3,
    }
});

// Functional component
export default function GoogleCalendarConnectButton() {
    return (
        <Pressable style={styles.button}>
            <Text>Connect to Google Calendar</Text>
        </Pressable>
    )
}