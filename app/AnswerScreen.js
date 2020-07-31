
import 'react-native-gesture-handler';
import React, {Component} from 'react';

//답안제출화면입니다
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Dimensions,
} from 'react-native';
const AnswerScreen  = () => {
  return(
    <View style = {styles.titleContainer}>
      <Text style = {styles.titleText}>Login</Text>
      <View style = {styles.border}>
        <TextInput
        style = {styles.input}
          placeholder = {'1번'}
          placeholderTextColor = {'rgba(255,255,255,1)'}
          underlineColorAndroid = 'transparent'
        />
      </View>
      <View style = {styles.border}>
        <TextInput style = {styles.input}
          placeholder = {'2번'}
          secureTextEntry = {true}
          placeholderTextColor = {'rgba(255,255,255,1)'}
          underlineColorAndroid = 'transparent'
        />
      </View>
      <View style = {styles.border}>
        <TextInput
        style = {styles.input}
          placeholder = {'3번'}
          placeholderTextColor = {'rgba(255,255,255,1)'}
          underlineColorAndroid = 'transparent'
        />
      </View>
      <View style = {styles.border}>
        <TextInput
        style = {styles.input}
          placeholder = {'4번'}
          placeholderTextColor = {'rgba(255,255,255,1)'}
          underlineColorAndroid = 'transparent'
        />
      </View>
      <View style = {styles.border}>
        <TextInput
        style = {styles.input}
          placeholder = {'5번'}
          placeholderTextColor = {'rgba(255,255,255,1)'}
          underlineColorAndroid = 'transparent'
        />
      </View>
      <View style = {styles.btn}>
          <TouchableOpacity style={styles.loginBtn} onPress = {modalDidClose()}>
            <Text style = {styles.loginTextBtn}>닫기</Text>
          </TouchableOpacity>
      </View>
    </View>
    );
}
const styles = StyleSheet.create({
  titleContainer : {
    backgroundColor : '#36485f',
    alignSelf : 'stretch',
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  titleText : {
    color : '#fff',
    fontSize : 30,
    fontWeight : 'bold',
  },
  input: {
    marginTop : 20,
    width : WIDTH - 50,
    borderColor : '#fff',
    borderWidth : 1,
    color : 'white',
    borderRadius : 25,
    fontSize : 16,
    paddingLeft : 45,
    opacity : 0.7
  },

  loginBtn : {
    marginTop : 20,
    marginLeft : 20,
    marginRight : 20,
    width : 100,
    paddingTop : 20,
    paddingBottom : 20,
    backgroundColor : 'powderblue',
    borderRadius : 25,
    color : 'white',
    opacity : 0.7
  },
  loginTextBtn : {
    color : 'white',
    fontWeight : 'bold',
    textAlign : 'center',
    fontSize : 18,
  },
  btn : {
    flexDirection : 'row'
  }
});
export default LoginScreen;
