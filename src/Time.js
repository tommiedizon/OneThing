import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button, onChange } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Page() {
  return (
      <View style={styles.container}>
        <View style={styles.name}>
          <Text style={{ fontSize: 25 }}>
            <Text>Hi,</Text>
            <Text style={{ fontWeight: 'bold' }}>Tommie</Text>
          </Text>
        </View>

        <View style={styles.centerContent}>
          <Text style={{ fontSize: 25, width: 300, textAlign: 'center' }}>
            <Text>When are you free for  </Text>
            <Text style={{ fontWeight: 'bold' }}>One </Text>
            <Text>day,  </Text>
            <Text style={{ fontWeight: 'bold' }}>One </Text>
            <Text>hour?</Text>
          </Text>

          {/* Date time picker here */}

          <Icon style={{ marginTop: 50, fontSize: 50, textAlign: 'center' }} name='arrow-circle-right' />
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
});