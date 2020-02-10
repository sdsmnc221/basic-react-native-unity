import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import configs from '../../configs/';

const BASE = 'https://cataas.com/cat?';

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const cat = () => `${BASE}${randomIntegerInRange(1, 888)}`;

const MeowScreen = () => {
  const [uri, setUri] = useState(cat())
  return (
      <View style={styles.body}>
        <Text style={styles.bold}>Meow</Text>
        <TouchableOpacity onPress={() => setUri(cat())}>
          <Image
            source={{uri: uri}}
            style={styles.img}
          />
          <Text style={styles.center}>{uri}</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  img: {
    width: 360,
    height: 360,
    margin: 24,
    padding: 12,
  },
  center: {
    textAlign: 'center',
    color: configs.colors.tint,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default MeowScreen;
