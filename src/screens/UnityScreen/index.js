import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import configs from '../../configs/';

import UnityView, { UnityModule } from '@asmadsen/react-native-unity-view';

const UnityScreen = ({navigation}) => {
  navigation.setOptions({
    unmountOnBlur: true
  });

  const isFocused = useIsFocused();
  const [unityMessage, setUnityMessage] = useState('');
  const [unityMessageCb, setUnityMessageCb] = useState('');

  const onUnityMessage = (message) => {
    console.log(message);
    if (message) setUnityMessage(message);
  };

  const bridge = (data, cb = null) => {
    if (!cb) cb = (data) => {
      console.log(data);
      if (data) setUnityMessageCb(JSON.stringify(data));
    }
    UnityModule.postMessageToUnityManager({
      name: data,
      data: data,
      callBack: cb
  });
  }

  useEffect(() => {
    bridge('OnStart');
    
    if (isFocused) bridge('OnStart');
  }, [])

  const createUnityView = () => <UnityView
      style={styles.unity}
      onMessage={onUnityMessage}
      onUnityMessage={onUnityMessage}
    />

  return (
      <View style={styles.body}>
        <Text style={styles.bold}>Unity</Text>
        {createUnityView()}
        <View style={styles.log}>
          <Text style={styles.center}>Bridge Log: {unityMessage || 'none'}</Text>
          <Text style={styles.center}>Unity Message Callback: {unityMessageCb || 'none'}</Text>
        </View>
        <View style={styles.controller}>
          <TouchableOpacity style={styles.button} onPress={() => bridge('ToggleRotate')}>
            <Text style={styles.center}>Toggle Rotation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => bridge('ChangeBGColor')}>
            <Text style={styles.center}>Change Background Color</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  body: {
    position: 'relative',
    backgroundColor: Colors.black,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  bold: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 24,
    margin: 48,
    marginBottom: 24,
    textAlign: 'center',
    position: 'relative',
    zIndex: 999,
  },
  center: {
    textAlign: 'center',
    color: Colors.white,
    marginBottom: 6,
    fontSize: 12
  },
  controller: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: Colors.white,
  },
  button: {
    padding: 12,
    marginBottom: 1,
    backgroundColor: configs.colors.semitint,
  },
  log: {
    width: '100%',
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  unity: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: -1
  }
});

export default UnityScreen;
