import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import { Font } from 'expo';

export default class DemHouseRepPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
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

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={{uri:this.props.navigation.getParam('uri')}} // image from the API
          style={styles.image}
        />
        <Text style={styles.textBody}>{this.props.navigation.getParam('party')}</Text>
        <Text style={styles.textBody}>{this.props.navigation.getParam('addressline1')}</Text>
        <Text style={styles.textBody}>{this.props.navigation.getParam('addressline2')}</Text>
        <Text style={styles.textBody}>{this.props.navigation.getParam('city')}, {this.props.navigation.getParam('state')} {this.props.navigation.getParam('zip')}</Text>
        <Text style={styles.textBody}>{this.props.navigation.getParam('phone')}</Text>
        <Text style={styles.textBody}>{this.props.navigation.getParam('url')}</Text>
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
    margin: 15,
    height: 100,
    borderRadius: 50,
    width: 100
  },
  textBody: {
    color: "#FFFFFF"
  },
  flatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
