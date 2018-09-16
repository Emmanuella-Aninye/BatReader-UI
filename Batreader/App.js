// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, NavigationActions, DrawerNavigator } from 'react-navigation';
import Initialization from './src/screens/Initialization';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
const RootStack = new StackNavigator({
  Home:{
    screen: Initialization,
  navigationOptions: {
    title: 'Log In',
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
  screen: HomeScreen,
navigationOptions: {
  title: 'Home',
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

const tabWindow = new DrawerNavigator({
  Home: {
    screen: Initialization
  },
  SignUp: {
    screen: SignUp
  }
}, {
  drawerWidth: 300
});
export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
