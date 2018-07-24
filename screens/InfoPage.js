import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Font } from 'expo';

export default class InfoPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: '#919793'
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#FFFFFF'
    }
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        Do you want to participate in our democracy, but you do not know where to start?
        Well look no further. This app will help you find your local polling stations,
        who is running for office: local, county, state, and federal, when the elections are,
        help you register to vote, and enroll you in mail in voting to avoid those long lines at DMV.
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#919793',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 17,
  },
});
