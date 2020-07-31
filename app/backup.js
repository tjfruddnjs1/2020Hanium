
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
 StyleSheet,
 ScrollView,
 View,
 Text,
 TextInput,
 Dimensions,
 TouchableOpacity,
} from 'react-native';

const SolvingScreen = ({navigation}) => {
    return(
      <View style = {styles.container}>
        <FontAwesome5 name = 'arrow-left' style = {styles.icon} onPress = {() => navigation.goBack()}/>
        <View style = {styles.subcon}>
          <View style = {styles.numbox}><Text style = {styles.numtext}>01</Text></View>
          <View style = {styles.numbox}><Text style = {styles.numtext}>02</Text></View>
          <View style = {styles.numbox}><Text style = {styles.numtext}>03</Text></View>
        </View>
        <View style = {styles.subcon}>
          <View style = {styles.numbox}><Text style = {styles.numtext}>04</Text></View>
          <View style = {styles.numbox}><Text style = {styles.numtext}>05</Text></View>
          <View style = {styles.numbox}><Text style = {styles.numtext}>06</Text></View>
        </View>
        <View style = {styles.subcon}>
          <View style = {styles.numbox}><Text style = {styles.numtext}>07</Text></View>
          <View style = {styles.numbox}><Text style = {styles.numtext}>08</Text></View>
          <View style = {styles.numbox}><Text style = {styles.numtext}>09</Text></View>
        </View>
        <View style = {styles.subcon}>
          <View style = {styles.numbox}><Text style = {styles.numtext}>10</Text></View>
          <View style = {styles.numbox}><Text style = {styles.numtext}>11</Text></View>
          <View style = {styles.numbox}><Text style = {styles.numtext}>12</Text></View>
        </View>
        <View style = {styles.navBtn}>
          <View style = {styles.nav}></View>
          <View style = {styles.nav}></View>
          <View style = {styles.nav}></View>
        </View>
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
    alignItems : 'center',
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
    borderRadius : 20
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
export default SolvingScreen;
