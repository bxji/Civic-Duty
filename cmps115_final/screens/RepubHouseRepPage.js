import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import { Font } from 'expo';


export default class RepubHouseRepPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: '#CC0000'
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
        <Text style={styles.textBody}>{this.props.navigation.getParam('addressline2')}, {this.props.navigation.getParam('city')}, {this.props.navigation.getParam('state')} {this.props.navigation.getParam('zip')}</Text>
        <Text style={styles.textBody}>{this.props.navigation.getParam('phone')}</Text>
        <Text style={styles.textBody}>{this.props.navigation.getParam('url')}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC0000',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  image: {
    margin: 10,
    height: 100,
    borderRadius: 50,
    width: 100,
  },
  textBody: {
    color: "#FFFFFF"
  },
});
