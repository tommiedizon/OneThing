import React, { useState } from 'react';
import { View, Button } from 'react-native';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';

const EmojiPicker = () => {
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);

  const toggleEmojiSelector = () => {
    setShowEmojiSelector(!showEmojiSelector);
  };


  return (
    <View>
        <EmojiSelector
            category={Categories.symbols}
            onEmojiSelected={emoji => console.log(emoji)}
        />
    </View>
  );
};

export default EmojiPicker;