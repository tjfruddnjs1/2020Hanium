import React from 'react';
import Modal from 'react-native-simple-modal';
import {   Dimensions,StyleSheet,TextInput, AppRegistry, Text, TouchableOpacity, View} from 'react-native';
const {width : WIDTH } = Dimensions.get('window');

export default class Example extends React.Component {
  state = {open: false};
  render() {
    return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => this.setState({open: true})}>
        <Text style={styles.titleText}>답안 제출하기</Text>
      </TouchableOpacity>
      <Modal
        modalStyle={{
          borderRadius: 10,
          margin: 20,
          padding: 10,
          backgroundColor: '#36485f'
        }}
        offset={this.state.offset}
        open={this.state.open}
        modalDidOpen={() => console.log('modal did open')}
        modalDidClose={() => this.setState({open: false})}
        style={{alignItems: 'center'}}>
        <View>
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
            <TouchableOpacity style={styles.loginBtn} onPress = {() => this.setState({open: false})}>
              <Text style = {styles.loginTextBtn}>닫기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress = {() => this.setState({open: false})}>
              <Text style = {styles.loginTextBtn}>제출하기</Text>
            </TouchableOpacity>
        </View>

        </View>
      </Modal>
    </View>
    );
  }
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
    borderColor : 'white',
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
    flexDirection : 'row',
    justifyContent: 'space-between'
  }
});

AppRegistry.registerComponent('ModalButton', () => Example);
