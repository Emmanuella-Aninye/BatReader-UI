import React from 'react';
import { View, ScrollView} from 'react-native';

const NewReleasesContainer = (props) => {
  return (
    <View style={styles.containerStyle}>
    <ScrollView>
      {props.children}
      </ScrollView>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default NewReleasesContainer;
