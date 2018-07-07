import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

class Movie extends React.Component {
  render() {
    return (
      <Text>{this.props.title}</Text>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'hey'
    }
    this.title = "hi";
  }

  componentDidMount() {
    return fetch('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY')
      .then((response) => response.json())
      .then((responseJson) => {
  
        this.setState({
  
          dataSource: responseJson.elections,
        }, function() {
  
        });
      })
      /*.then((responseJson) => {
        alert(responseJson.movies[0].title);
        console.log(responseJson.movies);
        return responseJson.movies;
      })*/
      .catch((error) => {
        console.error(error);
      });
  }


  render() {

    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data = {this.state.dataSource}
          renderItem = {({item}) => <Text>{item.name}, {item.electionDay}, {/*{item.ocdDivisionId}*/}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
