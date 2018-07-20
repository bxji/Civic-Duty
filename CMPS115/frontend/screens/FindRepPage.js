import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import VotingData from '../assets/data/VotingData'

export default class FindRepPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render() {
    return (
      <VotingData/>
    );
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
