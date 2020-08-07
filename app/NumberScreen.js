import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const NumberScreen = ({ navigation }) => {
  return (
    <View style={styles.subcon} >
      <TouchableOpacity style={styles.numbox} onPress={() => navigation.navigate('Problem')} ><Text style={styles.numtext}>1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.numbox}><Text style={styles.numtext}>2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.numbox}><Text style={styles.numtext}>3</Text></TouchableOpacity>
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
  container: {
    backgroundColor: '#36485f',
    flex: 1,
    alignItems: 'center',
    marginTop: -10
  },
  subcon: {
    marginTop: 40,
    flexDirection: 'row',
  },
  numbox: {
    borderWidth: 2,
    borderColor: '#fff',
    padding: 25,
    margin: 20,
    borderRadius: 20,
    width: 80,
    height: 80
  },
  numtext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },
  navBtn: {
    flexDirection: 'row',
    marginTop: 10
  },
  nav: {
    borderRadius: 50,
    borderWidth: 2,
    marginLeft: 10,
    padding: 5,
    borderColor: '#fff',
  }
});
export default NumberScreen;
