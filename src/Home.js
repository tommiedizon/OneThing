import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Button, onPressLearnMore, TouchableOpacity, Image } from 'react-native';

export default function Page() {
  return (
      <View style={styles.container}>
        <View style={styles.name}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Today</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sat, Aug 26</Text>
        </View>

        <Image source={require('./assets/Tommie.JPEG')} style={styles.image} />

        <View style={styles.endButton}>
          <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon style={{ fontSize: 20, alignContent: 'center', justifyContent: 'center', marginRight: 5 }} name='close'/>
            <Text style={{ color:"#232244", fontSize: 15 }}>End</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 480, width: 358, alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', borderRadius: 13, shadowColor: '#757575', shadowRadius: 10, shadowOpacity: 0.5, shadowOffset: 10 }}>
          <View style={styles.centerContent}>
            <Text style={{ fontSize: 25, width: 250, textAlign: 'center' }}>
              <Text>Tommie's </Text>
              <Text style={{ fontWeight: 'bold' }}>OneThing </Text>
              <Text style={{ fontSize: 20, color: '#757575' }}>for Sun, Aug 27</Text>
            </Text>
            <View
              style = {{
                borderRadius: 125,
                width: 250,
                height: 250,
                borderColor: 'black',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ textAlign: 'center', fontSize: 100 }}>&#x1F3C0;</Text>
              <Text style={{ fontSize: 20 }}>Basketball</Text>
            </View>
            <View style={{ borderWidth: 1, borderRadius: 20, backgroundColor: '#232244', width: 235 }}>
              <Button
                onPress={onPressLearnMore}
                title="One done!"
                color="white"
              />
            </View>
          </View>
        </View>

        <View style={styles.menuBar}>
          <View style={{ flexDirection: 'row', gap: 80, alignItems: 'center'}}>
            <TouchableOpacity style={{ backgroundColor: 'white', height: 50, width: 50, borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon style={{ fontSize: 35, width: 35, color: '#232244' }} name='home'/>
            </TouchableOpacity>
            <TouchableOpacity>
              <IonIcon style={{ fontSize: 35, color: 'white' }} name='journal' />
            </TouchableOpacity>
            <TouchableOpacity>
              <IonIcon style={{ fontSize: 35, color: 'white' }} name='settings-sharp' />
            </TouchableOpacity>
          </View>
        </View>
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
  },
  menuBar: {
    width: 358,
    height: 77,
    borderRadius: 40,
    backgroundColor: '#232244',
    justifyContent: 'center',
    alignItems: 'center',
    top: 100
  }
});