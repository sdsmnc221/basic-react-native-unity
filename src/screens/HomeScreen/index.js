import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  Image,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import configs from '../../configs/';

const HomeScreen = () => {
  return (
      <View style={styles.body}>
        <Text style={styles.bold}>Home</Text>
        <Image
            source={{uri: 'https://media.giphy.com/media/hWXisyrFbbCm293C5F/giphy.gif'}}
            style={styles.img}
          />
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
    margin: 24
  },
  bold: {
      fontWeight: 'bold',
      fontSize: 24,
      marginBottom: 24,
      textAlign: 'center',
  },
  link: {
      color: configs.colors.tint,
      padding: 12,
      textAlign: 'center',
  }
});

export default HomeScreen;
