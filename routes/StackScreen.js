/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';

 import SolvingScreen from '../app/SolvingScreen.js';
 import LoginScreen from '../app/LoginScreen.js';
 import RegisterScreen from '../app/RegisterScreen.js';
 import MenuScreen from '../app/MenuScreen.js';
 import ProblemScreen from '../app/ProblemScreen.js';
 import NumberScreen from '../app/NumberScreen.js';

const RootStack = createStackNavigator();

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const StackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="Solve" component={SolvingScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="Register" component={RegisterScreen}
        options={{ headerShown: false }}/>
        <RootStack.Screen name="Problem" component={ProblemScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="Number" component={NumberScreen} options={{ headerShown: false }}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
