import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
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
            icon={{name: 'trash-o', type: 'font-awesome', size: 20}}
            title='Home'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Home')}/>

            <Text style={styles.sectionHeadingStyle}>
            </Text>

          <Button
            raised
            icon={{name: 'umbrella', type: 'font-awesome', size: 20}}
            title='Four'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Four')}/>

            <Text style={styles.sectionHeadingStyle}>
           </Text>

          <Button
            raised
            icon={{name: 'user-circle', type: 'font-awesome', size: 20}}
            title='Five'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Five')}/>

        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
  },
  separatorTop: {
    marginBottom: 30,
    height: 125,
  },
  sectionHeadingStyle: {
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  button: {
    backgroundColor: '#E71D36',
  }
});


SideBar.propTypes = {
  navigation: PropTypes.object
};
