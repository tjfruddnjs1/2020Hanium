import 'react-native-gesture-handler';
import React, { Component } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.titleContainer}>
      <FontAwesome5 name='arrow-left' style={styles.icon} onPress={() => navigation.goBack()} />

      <Text style={styles.titleText}>회원가입</Text>
      <TextInput style={styles.textinput} placeholder="Username" placeholderTextColor={'rgba(255,255,255,0.5)'} underlineColorAndroid={'transparent'} />
      <TextInput style={styles.textinput} placeholder="Password" placeholderTextColor={'rgba(255,255,255,0.5)'} secureTextEntry={true} underlineColorAndroid={'transparent'} />
      <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor={'rgba(255,255,255,0.5)'} underlineColorAndroid={'transparent'} />

      <TouchableOpacity style={styles.regbtn}>
        <Text style={styles.btnText}>가입</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    color: '#fff',
    fontSize: 25,
    left: 30,
    top: 30,
  },

  textinput: {
    alignSelf: 'center',
    width: WIDTH - 100,
    height: 40,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontSize: 15
  },
  regbtn: {
    backgroundColor: '#59cbbd',
    padding: 20,
    width: WIDTH - 100,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  titleContainer: {
    backgroundColor: '#36485f',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
});

export default RegisterScreen;
