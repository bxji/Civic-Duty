import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { Component } from 'react';

const items = [
  {name: 'Find Your Rep'},
  {name: 'Register To Vote'},
  {name: 'Info'},
]

export default class DemSenatorPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {'TESTING'}</Text>
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
    fontSize: 27,
    color: '#FFFFFF',
  },
});
