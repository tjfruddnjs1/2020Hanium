import React from 'react';
import Modal from 'react-native-simple-modal';
import {   Dimensions,StyleSheet,TextInput, AppRegistry, Text, TouchableOpacity, View,Animated} from 'react-native';
const {width : WIDTH } = Dimensions.get('window');

export default class Example extends React.Component {
  constructor()
  {
    super();
    this.panResponder;
    this.state = {
        open: false,
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: ''
    }
  }
  handleChangeText1=(typedText) =>{
    this.setState({num1: typedText});
  }
  handleChangeText2=(typedText) =>{
    this.setState({num2: typedText});
  }
  handleChangeText3=(typedText) =>{
    this.setState({num3: typedText});
  }
  handleChangeText4=(typedText) =>{
    this.setState({num4: typedText});
  }
  handleChangeText5=(typedText) =>{
    this.setState({num5: typedText});
  }

  render() {
    return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => this.setState({open: true})}>
        <Text style={styles.titleText}>답안지</Text>
      </TouchableOpacity>
      <Modal
        modalStyle={{
          borderRadius: 10,
          margin: 20,
          padding: 10,
          backgroundColor: '#36485f',
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
            onChangeText={this.handleChangeText1}
            value={this.state.num1}
          />
        </View>
        <View style = {styles.border}>
          <TextInput style = {styles.input}
            placeholder = {'2번'}
            placeholderTextColor = {'rgba(255,255,255,1)'}
            underlineColorAndroid = 'transparent'
            onChangeText={this.handleChangeText2}
            value={this.state.num2}
          />
        </View>
        <View style = {styles.border}>
          <TextInput
          style = {styles.input}
            placeholder = {'3번'}
            placeholderTextColor = {'rgba(255,255,255,1)'}
            underlineColorAndroid = 'transparent'
            onChangeText={this.handleChangeText3}
            value={this.state.num3}
          />
        </View>
        <View style = {styles.border}>
          <TextInput
          style = {styles.input}
            placeholder = {'4번'}
            placeholderTextColor = {'rgba(255,255,255,1)'}
            underlineColorAndroid = 'transparent'
            onChangeText={this.handleChangeText4}
            value={this.state.num4}
          />
        </View>
        <View style = {styles.border}>
          <TextInput
          style = {styles.input}
            placeholder = {'5번'}
            placeholderTextColor = {'rgba(255,255,255,1)'}
            underlineColorAndroid = 'transparent'
            onChangeText={this.handleChangeText5}
            value={this.state.num5}
          />
        </View>
        <Text
          style={{
            padding: 20,
            fontSize: 15,
            color: 'white'
          }}>
          you typed [{this.state.num1}] {"\n"}
          you typed [{this.state.num2}] {"\n"}
          you typed [{this.state.num3}] {"\n"}
          you typed [{this.state.num4}] {"\n"}
          you typed [{this.state.num5}] {"\n"}
        </Text>

        <View style = {styles.btn}>
            <TouchableOpacity style={styles.loginBtn} onPress = {() => this.setState({open: false})}>
              <Text style = {styles.loginTextBtn}>닫기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress = {() => this.setState({num1:'',num2:'',num3:'',num4:'',num5:''})}>
              <Text style = {styles.loginTextBtn}>다지우기</Text>
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
    width : 70,
    paddingTop : 20,
    paddingBottom : 20,
    backgroundColor : 'gray',
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
