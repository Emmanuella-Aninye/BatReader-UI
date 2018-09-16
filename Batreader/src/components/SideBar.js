import React, { Component } from "react";
import Initialization from './src/screens/Initialization';
import DetailsScreen from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import { DrawerNavigator , NavigationActions, DrawerItems, SafeAreaView} from "react-navigation";
const RootStack = new DrawerNavigator({
  Home:{
    screen: Initialization
  },
  Details: {
    screen: DetailsScreen
  },
HomeScreen: {
  screen: HomeScreen
},
{
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Welcome!',
    headerTintColor: 'white',
  })
},}
);
export default SideBar;
