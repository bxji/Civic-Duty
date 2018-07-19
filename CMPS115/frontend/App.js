/* Must install the following denpendencies:
* npm install --save react-navigation
* npm install --save expo
*/

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import VotingData from './assets/data/VotingData';

<<<<<<< HEAD


class MainPage extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#919793',
    },
  };

  state = {
    fontLoaded: false,
  }

  async componentWillMount(){
    await Expo.Font.loadAsync({
      'Georgia': require('./assets/fonts/GeorgiaBold.ttf'),
      'Baskerville': require('./assets/fonts/Baskerville.ttf'),
    });
    this.setState({ fontLoaded: true });
=======
class App extends React.Component {
  state = {
    spinner: false
  };

  async handleFetch(url) {
    try {
      this.setState({ spinner: true });
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          zip: "92129"
        })
      });
      const dataSource = response.json();
      this.setState({ dataSource: result.officials, spinner: false });
    } catch (e) {
      this.setState({ spinner: false });
      console.error(error);
    }
  }

  componentDidMount() {
    this.handleFetch("http://civic-duty.herokuapp.com/representative/");
>>>>>>> abd76a8bbea42fbe21763f4d3fb6073408bccdef
  }

  render() {
    return (
<<<<<<< HEAD
      <View style={styles.container}>
      {
        this.state.fontLoaded ? (
          <Text style={styles.textTitle}>
          Civic Duty{"\n"}
            <Text style={styles.textSubTitle}>Informing the Masses
            </Text>
          </Text>
        ) : null
      }
      <Button
        onPress={() => this.props.navigation.navigate('RepresentativePage')}
        title="Find Your Rep"
        color = '#919793'
      />
      </View>
    );
  }
}

class FindRepScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#919793',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
        title="List of Reps"
        onPress={() => this.props.navigation.push('ListOfRepsPage')}
=======
      <View style={{ flex: 1, paddingTop: 20 }}>
        {this.state.spinner && <Spinner />}
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.name}, {item.party}, {/*{item.ocdDivisionId}*/}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
>>>>>>> abd76a8bbea42fbe21763f4d3fb6073408bccdef
        />
      </View>
    );
  }
<<<<<<< HEAD
}

class ListOfRepresentativesPage extends React.Component {
  constructor(props) {
    super(props)

  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#919793',
    },
  };

  render() {
    return (
      <View style={styles.container}>
          <VotingData />
      </View>
    );
  }
}

class DemSenatorPage extends React.Component {
  constructor(props) {
    super(props)

  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#2B60DE',
    },
  };

  render() {
    return (
      <View style={styles.demBackGround}>
        <VotingData />
      </View>
    );
  }
}

class RepubSenatorPage extends React.Component {
  state = {
    fontLoaded: false,
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#CC0000',
    },
  };

  render() {
    return (
      <View style={styles.repubBackGround}>
      </View>
    );
  }
}

class IndepSenatorPage extends React.Component {
  state = {
    fontLoaded: false,
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#59459F',
    },
  };

  render() {
    return (
      <View style={styles.indepBackGround}>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    FrontPage: {
      screen: MainPage,
    },
    RepresentativePage: {
      screen: FindRepScreen,
    },
    ListOfRepsPage: {
      screen: ListOfRepresentativesPage,
    },
    RepubPage: {
      screen: RepubSenatorPage,
    },
    IndepPage: {
      screen: IndepSenatorPage,
    },
  },
  {
    initialRouteName: 'FrontPage',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
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
    fontFamily: 'Georgia',
    color: '#FFFFFF',
    marginTop: 70,
    marginBottom: 80,
  },
  textSubTitle: {
    fontSize: 13,
    fontFamily: 'Baskerville',
    color: '#FFFFFF',
    alignItems: 'center',
  },
  textLinks: {
    fontSize: 16,
    color: '#FFFFFF',
    alignItems: 'center',
    marginLeft: 40,
  },
  demBackGround: {
    flex: 1,
    backgroundColor: '#2B60DE',
    alignItems: 'center',
  },
  repubBackGround: {
    flex: 1,
    backgroundColor: '#CC0000',
    alignItems: 'center',
  },
  indepBackGround: {
    flex: 1,
    backgroundColor: '#59459F',
    alignItems: 'center',
  },
});
=======
}
>>>>>>> abd76a8bbea42fbe21763f4d3fb6073408bccdef
