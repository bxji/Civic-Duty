import {
  Alert,
  AppRegistry,
  Button,
  Image,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity} from 'react-native';
import React, { Component } from 'react';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} //
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export default class ZipCodeInputPage extends Component {
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

  /**Constructors for all text input field
   */
  constructor(props) {
    super(props);
    this.state = {
      address: 'Address',
      zipCode: 'Zip Code'
    };
  }

  //button function that navigates to VotingData, passes zipCode and address
  _onPressButton(zipCode,address) {

        this.props.navigation.navigate('VotingData', {zipCode,address})
  }

  render() {
    return (
      //<View style={s.overlay}/>,
      <View style={{padding: 60, backgroundColor:'#919793', flex:1}}>
        <View>
          <TextInput
            style={{height: 40}}
            placeholder="Address"
            placeholderTextColor="#FFFFFF"
            onChangeText={(address) => this.setState({address})} />
            
          <TextInput
            style={{height: 40}}
            placeholder="Zip"
            placeholderTextColor="#FFFFFF"
            onChangeText={(zipCode) => this.setState({zipCode})} />
        </View>
        <View style={{padding: 20}}>
          <Button
            onPress={() => this._onPressButton(this.state.zipCode,this.state.address)} // passess users zipcode/address to onPressButton
            title='Submit'
            color='#919793'
          />
        </View>
      </View>

    );
  }
}
