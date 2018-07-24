import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class FindRepPage extends Component {
  onLearnMore = () => {
    this.props.navigation.navigate('Test', {title: 'TEST'})
  }

  render() {
    return (
      <TouchableOpacity
        //key={index}
        //style={styles.item}
        onPress={() => this.onLearnMore()}
      >
        <Text style={styles.itemText}>Test Link</Text>
      </TouchableOpacity>
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
