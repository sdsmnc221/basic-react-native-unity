/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import configs from './src/configs';

import HomeScreen from './src/screens/HomeScreen';
import MeowScreen from './src/screens/MeowScreen';
import UnityScreen from './src/screens/UnityScreen';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator 
        screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              let iconColor = focused ? configs.colors.tint : configs.colors.semitint;

              switch (route.name) {
                case 'Home':
                  iconName = 'home-variant';
                  break;
                case 'Meow':
                  iconName = 'cat';
                  break;
                case 'Unity':
                  iconName = 'unity';
                  break;
                default:
                  break;
              }

              return <Icon name={iconName} size={24} color={iconColor} />;;
            },
          })}
          tabBarOptions={{
            activeTintColor: configs.colors.tint,
            inactiveTintColor: configs.colors.semitint,
          }}
        >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Meow" component={MeowScreen} />
        <Tabs.Screen name="Unity" component={UnityScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
