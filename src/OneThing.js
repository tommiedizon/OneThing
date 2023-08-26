import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './textInput';

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
            <Text>What is </Text>
            <Text style={{ fontWeight: 'bold' }}>OneThing </Text>
            <Text>you want to do?</Text>
          </Text>
          <Input />
          <Icon style={{ marginTop: 50, fontSize: 50, textAlign: 'center' }} name='arrow-circle-right' />
        </View>

        <StatusBar style="auto" />
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
  }
});