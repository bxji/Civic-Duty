import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
<<<<<<< HEAD
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
      </View>
    );
  }
=======
    constructor(props) {
        super(props);
        this.state = {
            title: 'hey'
        }
        this.title = "hi";
    }

    componentDidMount() {
        {/*return fetch('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY')
            .then((response) => response.json())
            .then((responseJson) => {
  
            this.setState({
                dataSource: responseJson.elections,
            }, function() {
  
            });
        })*/}
        return fetch('http://civic-duty.herokuapp.com/representative/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                zip: '92129',
            })
        })
        .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    dataSource: responseJson.officials,
                }, function() {
      
                });
            })
        .catch((error) => {
            console.error(error);
        });
    }


    render() {

        return (
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data = {this.state.dataSource}
                    renderItem = {({item}) => <Text>{item.name}, {item.party}, {/*{item.ocdDivisionId}*/}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
>>>>>>> be9f644b73c63841b2c0f74cc92f424755d40c76
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});