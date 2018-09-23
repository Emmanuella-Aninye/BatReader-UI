import React, { Component } from 'react';
import {View, StyleSheet,Text, Image, FlatList } from 'react-native';
import Dimensions from 'Dimensions';
import pic from '../images/Shadow_Bat.png'

export default class CardSectionGrid extends Component {

    render () {
    return (
      <View style={styles.border}>
      <FlatList
    contentContainerStyle={styles.list}
    data={data}
    renderItem={({item, index: number}) =>
       <View style={styles.item}>
         <Image source={item.uri} style={styles.image} />
         <Text >{item.name}</Text>
        </View> }
    keyExtractor={item => item.name}
    numColumns={3}

    />
  </View>);
    }
}
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
            },
            {
                "name": "co dmn",
                "email": "corvus@appdividend.com",
                "uri": pic
            },
            {
                "name": "cormnsd",
                "email": "corvus@appdividend.com",
                "uri": pic
            },
            {
                "name": "Loloo",
                "email": "corvus@appdividend.com",
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
