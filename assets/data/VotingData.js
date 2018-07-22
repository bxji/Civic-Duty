import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

export default class VotingData extends Component {
    constructor() {
        super();
        this.state = {
            title: 'test'
        }
    }

    //fectches the data from our webserver on herokuapp
    componentDidMount() {
        const zipCode = this.props.navigation.getParam('zipCode','Wrong Zip Code');
        return fetch('http://civic-duty.herokuapp.com/representative/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                zip: zipCode,
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
    //formats each piece of data by separating it item with lines and a background
    FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
  candidatesPage = (item) => {
    if(item.party == 'Republican') {
        this.props.navigation.navigate('RepubSenatorPage', {title: item.name});
    }
    if(item.party == 'Democratic') {
      this.props.navigation.navigate('DemHouseRepPage', {title: item.name});
    }
  }
    render() {
        return (
          <View>
            <FlatList
              data = {this.state.dataSource}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index})=>
                <TouchableOpacity onPress={() => this.candidatesPage(item)}>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: '#919793',
                }}>
                  <Image
                  source={{uri: item.photoUrl}}
                  style={{width: 100, height: 100, margin: 5}}
                >
                </Image>
                <View style={{
                  flex: 1,
                  flexDirection: 'column',
                }}>
                   <View>
                      <Text style={styles.FlatListItemStyle}>{item.name}</Text>
                      <Text style={styles.FlatListItemStyle}>{item.party}</Text>
                   </View>
                </View>
              </View>
                </TouchableOpacity>}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#CC0000',
  },
  FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});
