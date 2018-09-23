// In App.js in a new project

import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, NavigationActions, DrawerNavigator, TabNavigator} from 'react-navigation';
import Initialization from './src/screens/Initialization';
import SideBar from './src/components/SideBar';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import Recovery from './src/screens/PasswordRecovery';

export const Drawer = new DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Four: {
    screen: HomeScreen,
  },
  Five: {
    screen: HomeScreen,
  }
}, {
  contentComponent: SideBar,
  drawerWidth: 250,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});
const RootStack = new StackNavigator({
  Home:{
    screen: Initialization,
  navigationOptions: {
    title: 'Log In',
     headerLeft: null,
      headerStyle: {
        backgroundColor: '#006080',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  SignUp: {
    screen: SignUp,
  navigationOptions: {
    title: 'Sign Up',
      headerStyle: {
        backgroundColor: '#006080',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
HomeScreen: {
  screen: Drawer,
  navigationOptions: {
    title: 'Sign Up',
      headerStyle: {
        backgroundColor: '#006080',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
Recovery: {
screen: Recovery,
navigationOptions: {
title: 'Recover User Info',
  headerStyle: {
    backgroundColor: '#006080',
    headerLeft: null
  },
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontWeight: 'bold',
        },
      }
    },

}
);



export default class App extends Component {
  render() {
    return <RootStack />
  }
}
