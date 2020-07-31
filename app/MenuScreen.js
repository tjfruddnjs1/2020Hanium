
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



const {width : WIDTH } = Dimensions.get('window')

const MenuScreen = ({navigation}) => {
    return(
      <View style = {styles.menuContainer}>
        <FontAwesome5 name = 'arrow-left' style = {styles.icon} onPress = {() => navigation.goBack()}/>
        <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator = {true}>
            <View style = {styles.menu} >
              <Text style = {styles.menuTitle} onPress = {() => navigation.navigate('Solve')}>
                문제풀기
                <FontAwesome5 name = 'graduation-cap' style = {styles.icons}/>
              </Text>
            </View>
            <View style = {styles.menu}>
              <Text style = {styles.menuTitle}>게시판
                <Text>      </Text>
                <FontAwesome5 name = 'book' style = {styles.icons}/>
              </Text>
            </View>
            <View style = {styles.menu}>
              <Text style = {styles.menuTitle}>PVP
                <Text>      </Text>
                <FontAwesome5 name = 'wifi' style = {styles.icons}/>
              </Text>
            </View>
        </ScrollView>
      </View>
    );
}



const styles = StyleSheet.create({
  icons : {
    fontSize : 80,
    color : 'orange'
  },
  icon : {
    position : 'absolute',
    color : '#fff',
    fontSize : 25,
    left : 30,
    top : 30,
  },
  menuContainer : {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#36485f',
  },
  menu : {
    borderWidth: 1,
    borderColor : '#fff',
    marginLeft : 20,
    width : 200,
    height : 200,
    borderRadius : 20
  },
  menuTitle : {
    flex : 1,
    textAlign : 'center',
    fontWeight : 'bold',
    color : '#fff',
    fontSize : 30,
    marginTop : 40
  },

});

export default MenuScreen;
