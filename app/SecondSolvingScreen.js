
import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
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


// onPress = {() => navigation.navigate('Problem')}
// const NumberBox = ({navigation}) =>{
//   const [num, setNum] = useState(1);
//     return(
//         <View style = {styles.subcon} >
//           <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem')} ><Text style = {styles.numtext}>{num}</Text></TouchableOpacity>
//           <TouchableOpacity style = {styles.numbox}><Text style = {styles.numtext}>{num+1}</Text></TouchableOpacity>
//           <TouchableOpacity style = {styles.numbox}><Text style = {styles.numtext}>{num+2}</Text></TouchableOpacity>
//         </View>
//     );
// }

const SolvingScreen = ({navigation}) => {
  const [num, setNum] = useState(1);
    return(
      <View style = {styles.container}>
      <FontAwesome5 name = 'arrow-left' style = {styles.icon} onPress = {() => navigation.goBack()}/>
      <View style = {styles.subcon} >
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num})} ><Text style = {styles.numtext}>{num}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+1})}><Text style = {styles.numtext}>{num+1}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+2})}><Text style = {styles.numtext}>{num+2}</Text></TouchableOpacity>
      </View>
      <View style = {styles.subcon} >
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+3})} ><Text style = {styles.numtext}>{num+3}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+4})}><Text style = {styles.numtext}>{num+4}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+5})}><Text style = {styles.numtext}>{num+5}</Text></TouchableOpacity>
      </View>
      <View style = {styles.subcon} >
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+6})} ><Text style = {styles.numtext}>{num+6}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+7})}><Text style = {styles.numtext}>{num+7}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+8})}><Text style = {styles.numtext}>{num+8}</Text></TouchableOpacity>
      </View>
      <View style = {styles.subcon} >
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+9})} ><Text style = {styles.numtext}>{num+9}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+10})}><Text style = {styles.numtext}>{num+10}</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.numbox} onPress = {() => navigation.navigate('Problem',{num : num+11})}><Text style = {styles.numtext}>{num+11}</Text></TouchableOpacity>
      </View>
      <Nav/>
      </View>
    );
}



const Nav = () => {
  return(
    <View style = {styles.navBtn}>
      <View style = {styles.nav}></View>
      <View style = {styles.nav}></View>
      <View style = {styles.nav}></View>
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
export default SolvingScreen;
