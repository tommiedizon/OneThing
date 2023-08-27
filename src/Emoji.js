import Icon from 'react-native-vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View, Button, onPressLearnMore } from 'react-native';
// import EmojiSelector from 'react-native-emoji-selector';
import React, { useState } from 'react';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import EmojiPicker from './EmojiPicker';


export default function Emoji(props) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const toggleEmojiSelector = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const proceed = () => {
    props.navigation.navigate('Scheduler');
  }

  const onPressLearnMore = () => {
    console.log("TODO");
  }

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
        <Text style={{ textAlign: 'center', fontSize: 100 }}>&#x1F3C0;</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ borderWidth: 1, borderRadius: 20, borderColor: '#232244', width: 130 }}>
            <Button onPress={toggleEmojiSelector} title="Add emoji" color="#232244" />
          </View>
        </View>

        {/* {showEVmojiPicker && (
          <EmojiPicker />
        )} */}

          <Pressable onPress={proceed}>
            <View>
              <Icon style={{ marginTop: 50, fontSize: 50, textAlign: 'center' }} name='arrow-circle-right' />
            </View>
          </Pressable>
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