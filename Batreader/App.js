// In App.js in a new project

import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import { Button, Icon} from 'react-native-elements';
import { StackNavigator, NavigationActions,  DrawerNavigator, DrawerActions, TabNavigator} from 'react-navigation';
import Initialization from './src/screens/Initialization';
import CardSectionGrid from './src/components/SideBar';
import SideBar from './src/components/SideBar';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import NovelDescription from './src/screens/NovelDescription';
import Recovery from './src/screens/PasswordRecovery';

export const Drawer = new DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Favorites: {
    screen: SignUp,
  },
  Settings: {
    screen: Recovery,
  },
  Downloads: {
    screen: SignUp,
  },
  History: {
    screen: Recovery,
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
        return {
          headerTitle: "Home",
          headerLeft: (
            <Icon
            name='menu'
            onPress={ () => navigation.openDrawer()}
            size={35}/>
          ),
         headerStyle: {
              backgroundColor: '#006080',
              headerLeft: null
            },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
              fontWeight: 'bold'
              }
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
    NovelDescription: {
    screen: NovelDescription,
    navigationOptions: {
    title: 'NovelDescription',
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
  },
  image: {
    height: 70,
    width: 100
  }
});

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
