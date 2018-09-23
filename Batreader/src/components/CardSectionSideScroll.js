import React from 'react';
import { View, Text, Image, ScrollView, FlatList} from 'react-native';
import pic from '../images/155.jpg'
const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
    <FlatList horizontal={true}
      style={styles.textStyle}
      ItemSeparatorComponent={ () => <View style={ { width: 1, height: '100%',
      backgroundColor: '#000' } } /> }
       data = {data}
       renderItem={({item, index: number}) =>
          <View style={styles.textStyle}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Image source={item.uri} style={styles.imageView}/>
          </View> }
          keyExtractor={item => item.name}
    />

    </View>
  );
};

const data =
        [
            {
                "name": "Proxima Midnight",
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
                "name": "Loki",
                "email": "loki@appdividend.com",
                "uri": pic
            },
            {
                "name": "corvus",
                "email": "corvus@appdividend.com",
                "uri": pic
            }
        ];

var styles = {
  containerStyle: {
    height: 100 ,
    borderBottomWidth: 1,
    padding: 0,
    marginTop: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
    },
  textStyle: {
    textAlignVertical:'center',
    marginLeft: 2,
    marginRight: 2
    },
  imageView: {
    width: 100,
    height: 70 ,
    margin: 7,
    borderRadius : 7

},
};

export default CardSection;
