import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const items = [
  {name: 'Find Your Rep'},
  {name: 'Register To Vote'},
  {name: 'Info'},
]

export default class MainPage extends React.Component {
  onLearnMore = (item,index) => {
    if(index == 0){
      //this.props.navigation.navigate('ZipCodeInputPage', {title: item.name})
      this.props.navigation.navigate('ZipCodeInputPage', {title: item.name})
    }
    else if(index == 1){
      this.props.navigation.navigate('RegisterToVotePage', {title: item.name})
    }
    else{
      this.props.navigation.navigate('InfoPage', {title: item.name})
    }
  }

  renderItem = (item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.item}
        onPress={() => this.onLearnMore(item,index)}
      >
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Civic Duty</Text>
        {items.map(this.renderItem)}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#919793',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    marginTop: 40,
  }
});
