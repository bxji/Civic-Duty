//install these dependencies
//npm install react-native-checkbox-form --save
//npm install tcomb-form-native
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import t from 'tcomb-form-native';
import React, { Component } from 'react';
import CheckboxFormX from 'react-native-checkbox-form';
import { Font } from 'expo';

const mockData = [
    {
        label: 'NO',
        value: 'one'
    },
    {
        label: 'YES',
        value: 'two'
    },

];
const Form = t.form.Form;
const User = t.struct({
  terms: t.Boolean,
  Name: t.String,
  Family: t.String,
  Email: t.String,
  Phone: t.String,
  PartyPreference: t.String,
  username: t.maybe(t.String),
  password: t.String,

});

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
};


export default class RegisterToVotePage extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  render () {
    return (
      <View style={styles.container}>

        <Text style={styles.text}> {'Are you an American Citizen?'}</Text>
        <Form
          ref={c => this._form = c}
          type={User}
          options={options} // pass the options via props
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
        <CheckboxFormX
                          style={{ width: 350 - 200 }}
                          dataSource={mockData}
                          itemShowKey="label"
                          itemCheckedKey="RNchecked"
                          iconSize={40}
                          formHorizontal={true}
                          labelHorizontal={false}
                          onChecked={(item) => this._onSelect(item)}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#919793',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 27,
    color: '#FFFFFF',
  },
});

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}
