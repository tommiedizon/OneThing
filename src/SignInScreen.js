import { Image, StyleSheet, Text, View } from 'react-native';
import GoogleCalendarConnectButton from "./components/GoogleCalendarConnectButton";

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default function SignInScreen() {
    return (
        <View style={{display: 'flex'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}} >
                <Image style={{width: 100, height: 100}} source={require('./../assets/logo.png')}></Image>
            </View>
            <View style={{padding: '10%'}}>
                <Text style={styles.title}>OneThing</Text>
                <View style={{paddingTop: '10%', paddingHorizontal: '10%', paddingBottom: '30%'}}>
                        <Text style={styles.subtitle}>
                            <Text style={{fontWeight: "bold"}}>One </Text>
                            <Text>day, </Text>
                            <Text style={{fontWeight: "bold"}}>One </Text>
                            <Text>hour, </Text>
                            <Text style={{fontWeight: "bold"}}>One </Text>
                            <Text>week</Text>
                        </Text>
                </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <GoogleCalendarConnectButton/>
            </View>
        </View>
    )
}