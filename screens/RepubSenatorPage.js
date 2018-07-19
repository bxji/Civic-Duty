import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Font } from 'expo';

export default class RepubSenatorPage extends Component {
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
    backgroundColor: '#dadb0d',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 27,
    color: '#FFFFFF',
  },
});
