import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button, onPressLearnMore } from 'react-native';
import EmojiSelector from 'react-native-emoji-selector'

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
            <Text>Add an emoji for your </Text>
            <Text style={{ fontWeight: 'bold' }}>OneThing </Text>
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 100 }}>&#128054;</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderWidth: 1, borderRadius: 20, borderColor: '#232244', width: 130 }}>
              <Button
                onPress={onPressLearnMore}
                title="Add emoji"
                color="#232244"
              />
            </View>
          </View>
          
          {/* <EmojiSelector onEmojiSelected={emoji => console.log(emoji)}/> */}
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