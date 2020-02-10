import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import UnityView, { UnityModule } from '@asmadsen/react-native-unity-view';

const UnityScreen = ({navigation}) => {
  navigation.setOptions({
    unmountOnBlur: true
  })

  const onUnityMessage = () => {
    console.log("hi");
  }

  const createUnityView = () => <UnityView
      style={styles.unity}
      onMessage={onUnityMessage}
      onUnityMessage={onUnityMessage}
    />


  return (
      <View style={styles.body}>
        <Text style={styles.bold}>Unity</Text>
        {createUnityView()}
      </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 48,
    textAlign: 'center',
    position: 'relative',
    zIndex: 999,
  },
  unity: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
});

export default UnityScreen;
