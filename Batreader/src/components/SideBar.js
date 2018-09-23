import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button,Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

export default class SideBar extends Component {

  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.separatorTop}>
          </Text>

          <Button
            raised
            icon={{name: 'home', type: 'font-awesome', size: 20}}
            title='Home'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Home')}/>

            <Text style={styles.sectionHeadingStyle}>
           </Text>

           <Button
             raised
             icon={{name: 'favorite', size: 20}}
             title='Favorites'
             buttonStyle={styles.button}
             onPress={this.navigateToScreen('Favorites')}/>

            <Text style={styles.sectionHeadingStyle}>
            </Text>

          <Button
            raised
            icon={{name: 'history', type: 'font-awesome', size: 20}}
            title='History'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('History')}/>

            <Text style={styles.sectionHeadingStyle}>
           </Text>

          <Button
            raised
            icon={{name: 'download', type: 'font-awesome', size: 20}}
            title='Downloads'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Downloads')}/>

            <Text style={styles.sectionHeadingStyle}>
           </Text>

           <Button
             raised
             icon={{name: 'settings', size: 20}}
             title='Settings'
             buttonStyle={styles.button}
             onPress={this.navigateToScreen('Settings')}/>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
  },
  separatorTop: {
    marginBottom: 1,
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


SideBar.propTypes = {
  navigation: PropTypes.object
};
