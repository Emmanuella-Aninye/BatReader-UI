import React, {Component} from 'react';
import { ScrollView,TextInput,
   ImageBackground,Text, View,
   StyleSheet, Image, Button,
 TouchableOpacity, Alert } from 'react-native';
import Dimensions from 'Dimensions';
import { StackNavigator } from 'react-navigation';
import {tabWindow} from '../../App'
import { DrawerNavigator , DrawerItems, SafeAreaView} from "react-navigation";

class Home extends Component {
  render() {
          tabWindow
    return (

      <Text style={{color: 'white'}}>Home</Text>

    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  altcontainer: {
   flex: 1,
   top: 15,
   width: DEVICE_WIDTH,
   flexDirection: 'row',
   justifyContent: 'space-around'
 },
  textFirst: {
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 300
},
backgroundImage: {
       flex: 1,
       width: null,
       height: null,
       resizeMode: 'cover'
   },
   logoImage: {
     width: 200,
     height: 200
   },
   heading: {
     flexDirection: 'row',
     justifyContent: 'center'
   },
   inputContainer: {
     marginTop: 15,
     backgroundColor: 'rgba(255, 255, 255, 0.4)',
     height: 40,
     width: DEVICE_WIDTH - 40,
     marginHorizontal: 20,
     paddingLeft: 45,
     borderRadius: 20,
     color: '#ffffff',
   },
   inputWrapper:{flex: 1,
   alignItems: 'center'},
   inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  button: {
  marginTop: 15,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#006080',
  height: 40,
  width: DEVICE_WIDTH - 40,
  borderRadius: 20,
  zIndex: 100,
  color: 'white'
},
});
export default Home;
