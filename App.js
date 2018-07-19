import {
  StyleSheet,
  Text,
  View } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation'

//screen import(s) for the splash screen
import MainPage from './screens/MainPage'

//screen import(s) for links on the splash screen
import FindRepPage from './screens/FindRepPage'
//import RegisterToVotePage from './screens/RegisterToVotePage'
import InfoPage from './screens/InfoPage'

//screen import(s) for links of the links on the splash screen
//import ListOfRepresentativePage from './screens/ListOfRepresentativePage'
import DemSenatorPage from './screens/DemSenatorPage'
//import RepubSenatorPage from './screens/RepubSenatorPage'
//import ZipCodeInputPage from './screens/ZipCodeInputPage'


//import VotingData from './assets/data/VotingData'

//Main driver that starts the app. Calls AppNavigator
export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}


//creates a stack navigator. creates the ablility to navigate pages
const AppNavigator = createStackNavigator ({
  MainPage : { screen: MainPage },
  FindRepPage : { screen: FindRepPage },
  //RegisterToVotePage : { screeen: RegisterToVotePage },
  InfoPage : { screen: InfoPage },
  //ListOfRepresentativePage: { screen: ListOfRepresentativePage},
  DemSenatorPage : { screen: DemSenatorPage },
  //RepubSenatorPage : { screen: RepubSenatorPage },
  //ZipCodeInputPage : { screen: ZipCodeInputPage },

})
