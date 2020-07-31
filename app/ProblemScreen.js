
import 'react-native-gesture-handler';
import React, {Component, useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Example from './ModalButton.js';
import {
 Fragment,
 StyleSheet,
 ScrollView,
 View,
 Text,
 TextInput,
 Dimensions,
 TouchableOpacity,
 ActivityIndicator,
 FlatList
} from 'react-native';

const ProblemScreen = ({route, navigation}) => {
  const {num} = route.params;
    return(
    <View style = {styles.container}>
    <FontAwesome5 name = 'arrow-left' style = {styles.icon} onPress = {() => navigation.goBack()}/>
        <View style = {styles.subcon}></View><Text style = {styles.numtext}>{num}</Text>
        <Example/>
    </View>

    );
}

const styles = StyleSheet.create({
  icon : {
    position : 'absolute',
    color : '#fff',
    fontSize : 25,
    left : 30,
    top : 30,
  },
  container : {
    backgroundColor : '#36485f',
    flex : 1,
    marginTop : -10
  },
  subcon : {
    marginTop : 40,
    flexDirection : 'row',
  },
  numbox : {
    borderWidth : 2,
    borderColor : '#fff',
    padding : 25,
    margin : 20,
    borderRadius : 20,
    width : 80,
    height : 80
  },
  numtext : {
    color : '#fff',
    textAlign : 'center',
    fontSize : 18
  },
  navBtn : {
    flexDirection : 'row',
    marginTop : 10
  },
  nav : {
    borderRadius : 50,
    borderWidth : 2,
    marginLeft : 10,
    padding : 5,
    borderColor : '#fff',
  }
});
export default ProblemScreen;
