
import 'react-native-gesture-handler';
import React from 'react';


import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Dimensions,
} from 'react-native';

const {width : WIDTH } = Dimensions.get('window');

const LoginScreen  = ({navigation}, ) => {
  const goRegister = (e) =>{
    navigation.navigate('Register');
  };
    return(
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText}>Login</Text>
        <View style = {styles.border}>
          <TextInput
          style = {styles.input}
            placeholder = {'ID'}
            placeholderTextColor = {'rgba(255,255,255,1)'}
            underlineColorAndroid = 'transparent'
          />
        </View>
        <View style = {styles.border}>
          <TextInput style = {styles.input}
            placeholder = {'Password'}
            secureTextEntry = {true}
            placeholderTextColor = {'rgba(255,255,255,1)'}
            underlineColorAndroid = 'transparent'
          />
        </View>
        <View style = {styles.btn}>
            <TouchableOpacity style={styles.loginBtn} onPress = {() => navigation.navigate('Menu')}>
              <Text style = {styles.loginTextBtn}>login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress = {goRegister}>
              <Text style = {styles.loginTextBtn}>Register</Text>
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
