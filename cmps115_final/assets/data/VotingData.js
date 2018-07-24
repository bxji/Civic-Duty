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
    // fetches the data from our webserver on herokuapp
    componentDidMount() {
        const zipCode = this.props.navigation.getParam('zipCode','address');
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
  //function that navigates to either the republican or democrat page
  candidatesPage = (item) => {
    if(item.party == 'Republican') {
        this.props.navigation.navigate('RepubHouseRepPage',
        {title: item.name,
         uri: item.photoUrl,
         party: item.party,
         addressline1: item.address.line1,
         addressline2: item.address.line2,
         city: item.address.city,
         state: item.address.state,
         zip: item.address.zip,
         phone: item.phones,
         url: item.urls});
    }
    if(item.party == 'Democratic') {
      this.props.navigation.navigate('DemHouseRepPage',
      {title: item.name,
        uri: item.photoUrl,
        party: item.party,
        addressline1: item.address.line1,
        addressline2: item.address.line2,
        city: item.address.city,
        state: item.address.state,
        zip: item.address.zip,
        phone: item.phones,
        url: item.urls});
    }
    if(item.party == 'Independent' || item.party == 'Nonpartisan' || item.party == 'Unknown') {
      this.props.navigation.navigate('IndepHouseRepPage',
      {title: item.name,
        uri: item.photoUrl,
        party: item.party,
        addressline1: item.address.line1,
        addressline2: item.address.line2,
        city: item.address.city,
        state: item.address.state,
        zip: item.address.zip,
        phone: item.phones,
        url: item.urls});
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
  FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});
