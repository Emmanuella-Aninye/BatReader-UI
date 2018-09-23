// In App.js in a new project

import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity} from 'react-native';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import { StackNavigator, NavigationActions, Icon,  DrawerNavigator, DrawerActions, TabNavigator} from 'react-navigation';
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
  navigationOptions: ({ navigation }) => {
      const { state } = navigation;
      if (state.routes[ state.index ].key !== 'DrawerClose') {
        return {
          headerTitle: "HIOJ",
          headerLeft: (
            <Button title="close" onPress={ () => navigation.navigate('Draw') } >
            </Button>
          )
        };
      } else {
        return null
      }
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
  },
  separatorTop: {
    marginBottom: 5,
  },
  sectionHeadingStyle: {
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  button: {
    backgroundColor: '#006080',
  }
});

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
