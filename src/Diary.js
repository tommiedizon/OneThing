import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Button, onPressLearnMore, TouchableOpacity, Image } from 'react-native';

export default function Page() {
  return (
      <View style={styles.container}>
          <View style={styles.centerContent}>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Tommie's Diary</Text>
            <View style={{ height: 100, width: 358, alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', borderRadius: 13, shadowColor: '#757575', shadowRadius: 10, shadowOpacity: 0.5, shadowOffset: 10, flexDirection: 'row', gap: 35 }}>
              <Text style={{ textAlign: 'center', fontSize: 50 }}>&#x1F3C0;</Text>
              <Text style={{ fontSize: 20 }}>Basketball</Text>
              <Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>4 </Text>
                <Text style={{ fontSize: 20 }}>weeks</Text>
              </Text>
            </View>

            <View style={{ height: 100, width: 358, alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', borderRadius: 13, shadowColor: '#757575', shadowRadius: 10, shadowOpacity: 0.5, shadowOffset: 10, flexDirection: 'row', gap: 35 }}>
              <Text style={{ textAlign: 'center', fontSize: 50 }}>&#x1F436;</Text>
              <Text style={{ fontSize: 20 }}>Walk Tank</Text>
              <Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>6 </Text>
                <Text style={{ fontSize: 20 }}>weeks</Text>
              </Text>
            </View>

            <View style={{ height: 100, width: 358, alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', borderRadius: 13, shadowColor: '#757575', shadowRadius: 10, shadowOpacity: 0.5, shadowOffset: 10, flexDirection: 'row', gap: 35 }}>
              <Text style={{ textAlign: 'center', fontSize: 50 }}>&#x1F3AE;</Text>
              <Text style={{ fontSize: 20 }}>Gaming</Text>
              <Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>1 </Text>
                <Text style={{ fontSize: 20 }}>week</Text>
              </Text>
            </View>

            <View style={{ height: 100, width: 358, alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', borderRadius: 13, shadowColor: '#757575', shadowRadius: 10, shadowOpacity: 0.5, shadowOffset: 10, flexDirection: 'row', gap: 35 }}>
              <Text style={{ textAlign: 'center', fontSize: 50 }}>&#x1F373;</Text>
              <Text style={{ fontSize: 20 }}>Cook</Text>
              <Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>4 </Text>
                <Text style={{ fontSize: 20 }}>weeks</Text>
              </Text>
            </View>

            <View style={{ height: 100, width: 358, alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', borderRadius: 13, shadowColor: '#757575', shadowRadius: 10, shadowOpacity: 0.5, shadowOffset: 10, flexDirection: 'row', gap: 35 }}>
              <Text style={{ textAlign: 'center', fontSize: 50 }}>&#x1F3CB;</Text>
              <Text style={{ fontSize: 20 }}>Gym</Text>
              <Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>10 </Text>
                <Text style={{ fontSize: 20 }}>weeks</Text>
              </Text>
            </View>
          </View>

        <View style={styles.menuBar}>
          <View style={{ flexDirection: 'row', gap: 80, alignItems: 'center'}}>
            <TouchableOpacity>
              <FontAwesomeIcon style={{ fontSize: 35, width: 35, color: 'white' }} name='home'/>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'white', height: 50, width: 50, borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
              <IonIcon style={{ fontSize: 35, color: '#232244' }} name='journal' />
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
    justifyContent: 'center'
  },
  name: {
    position: 'absolute',
    top: 66,
    left: 35
  },
  centerContent: {
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center'
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
    top: 45,
  }
});
