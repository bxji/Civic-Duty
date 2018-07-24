import React, { Component } from 'react';
import CheckboxFormX from 'react-native-checkbox-form';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
  TouchableHighlight,
} from 'react-native';
import { Font } from 'expo';
import t from 'tcomb-form-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Dropdown } from 'react-native-material-dropdown';

var Positive = t.refinement(t.Number, function (n) {  //Funtion that sets age to be over 18
  return n > 17;
});
//Define the values for the dropdown
var Party = t.enums({
  Republican: 'Republican',
  Democrat: 'Democrat',
  Other: 'Other'
});
// Value for citizenship. Must be yes
var Citizenship = t.enums({
  Yes: 'Yes'
});
//tcomb-form-native declaration
const Form = t.form.Form;
const User = t.struct({
  Citizen: Citizenship,
  FirstName: t.String,
  LastName: t.String,
  Email: t.String,
  PhoneNumber: t.String,
  PartyPreference: Party,
  Age: t.Number,
});

//Those are the options for all the declarations
// var options = {
//   fields: {
//
//   }
// };


const options = {
  fields: {
    Citizen: {
      error: 'Only US citizens can register to vote ', //in case of not entering value this message pops
      required: ' (required)', //this option is required


    },
    FirstName: {
      error: 'You must enter your First Name ',
      required: ' (required)',

    },
    LastName: {
      error: 'You must enter your Last Name ',
      required: ' (required)',
    },
    Email: {
      error: 'Insert a valid email ',
      required: ' (required)'
    },
    PartyPreference: {
      error: 'You must choose your Party'
    },
    Age: {
      error: 'You must be over 18 to vote',
      required: ' (required)'
    },
  },
};

//note creating a email form doesnt work on emulator, you got to use iphone or android
//Your email also must be set up in order to use interval
//in my case it was an icloud email
export default class RegisterToVotePage extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();

    if (value) { // if validation fails, value will be null
       console.log(value); // value here is an instance of Person
       //this creates a from in the email body, with all the selected values
       var emailBody = "Name: "+ value.FirstName + "\n Surname: " + value.LastName
       + "\n Email: " + value.Email + "\n Phone Number: " + value.PhoneNumber
       + "\n Party Preference: " + value.PartyPreference;
       Linking.openURL("mailto:"+ value.Email + "?subject=Register&body="+emailBody);
    }


    // console.log('value: ', value);
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

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Form
            ref={c => this._form = c}
            type={User}
            options={options} // pass the options via props
          />
          <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Register Now!</Text>
          </TouchableHighlight>
        </View>
     </ScrollView>
    )
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 500,
    backgroundColor: '#919793',
    justifyContent: 'center',
    padding: 50,
    marginTop: 0,
    marginBottom: 30,

  },
  TextBoxColor: {
    color: "white"
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  textTitle: {
    fontSize: 27,
    color: '#000000',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  scroll: {
    borderColor: '#48BBEC',
  }
});

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: '#ffffff',
      borderColor: '#ffffff',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 10,
      fontWeight: '600'
    }
  }
}
