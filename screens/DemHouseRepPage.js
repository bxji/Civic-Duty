import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import { Font } from 'expo';

var repName = "Kamala Harris" // placeholder for where we put the rep's name from API
var repPicture = require('../debugimages/kamalaharris.jpg') // placeholder for where we put the rep's picture from API

export default class DemHouseRepPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: repName,
    headerStyle: {
      backgroundColor: '#2B60DE'
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#FFFFFF'
    }
  })

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  renderHeader = () => {
    return  <Text> On the issues... </Text>
  };

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={repPicture} // we will put the image from the API here
          style={styles.image}
        />
        <FlatList // This flat list displays each issue and where the reps stands on it.
          data={[{key: 'This is test layout. We can put each API entry into here.'}, {key: 'This is test layout. We can put each API entry into here.'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B60DE',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  image: {
    height: 100,
    borderRadius: 50,
    width: 100
  },
  textBody: {
    color: "#FFFFFF"
  }
});
