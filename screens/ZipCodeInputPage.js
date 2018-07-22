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

    title: navigation.state.params.title
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

  /**Constructors for Go Button */
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
        <View>
          <Button
            //zipCode={this.state.zipCode}
            onPress={() => this._onPressButton(this.state.zipCode,this.state.address)}
            title='Submit'
            color='#CC0000'
          />
        </View>
      </View>

    );
  }
}
