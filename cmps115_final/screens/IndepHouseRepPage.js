import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import { Font } from 'expo';

export default class IndepHouseRepPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: '#59459F'
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
          backgroundColor: "#59459F",
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
          source={{uri:this.props.navigation.getParam('uri')}} // image from the API
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
    backgroundColor: '#59459F',
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
