import React, { Component } from 'react';
import {View, StyleSheet,Text, Image, FlatList,TouchableHighlight,TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
import pic from '../images/Shadow_Bat.png'
import { StackNavigator, NavigationActions, StackActions } from 'react-navigation';
import PropTypes from 'prop-types';

const CardSectionGrid = (props) => {
      return (
      <View style={styles.border}>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        renderItem={({item, index: number,separators}) =>
           <View style={styles.item}>
           <Image source={item.uri} style={styles.image} />
           <Text >{item.name}</Text>
            </View> }
          keyExtractor={item => item.name}
          numColumns={3}  />

        </View>

);

};
const DEVICE_WIDTH = Dimensions.get('window').width;
const data =
        [
            {
                "name": "Proxidnight",
                "email": "proxima@appdividend.com",
                "uri": pic
            },
            {
                "name": "Ebony Maw",
                "email": "ebony@appdividend.com",
                "uri": pic
            },
            {
                "name": "Black Dwarf",
                "email": "dwarf@appdividend.com",
                "uri": pic
            },
            {
                "name": "Mad Titan",
                "email": "thanos@appdividend.com",
                "uri": pic
            },
            {
                "name": "Supergiant",
                "email": "supergiant@appdividend.com",
                "uri": pic
            },
            {
                "name": "Lkdsbjn jsnkdbnksoki",
                "email": "loki@appdividend.com",
                "uri": pic
            }
        ];
const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    textAlign: 'center',
    textAlignVertical: 'center'
    },
  item: {
        margin: 10,
        flex: 1,
        flexWrap: 'wrap'

    },
    image: {
      width: 100,
      height: 100
    },
    border:{
      borderColor: 'black'
    }

});

export default CardSectionGrid;
