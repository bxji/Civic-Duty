/* Must install the following denpendencies:
* npm install --save react-navigation
* npm install --save expo
*/

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import VotingData from './assets/data/VotingData';



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
  }

  render() {
    return (
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
        />
      </View>
    );
  }
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










































import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity } from 'react-native';
import React from 'react';



export default class VotingData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'hey'
        }
        this.title = "hi";
    }
    componentDidMount() {
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
    render() {
        return (
          <View style={styles.MainContainer}>
                <FlatList
                    data = {this.state.dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index})=>{
                      return (
                        <FlatListItem item={item} index={index}>
                        </FlatListItem>);
                    }}
                />
          </View>
        );
    }
}

class FlatListItem extends React.Component {
  _onPress = (item, index) => {
    if(index == 0){
      this.props.navigation.navigate('DemSenatorPage', {title: item.name})
    }
  }

 render() {
   const textColor = this.props.selected ? "red" : "black";
   return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: this.props.index % 2 == 0 ? '#CC0000' : '#FFFFFF',
    }}>
      <Image
      source={{uri: this.props.item.photoUrl}}
      style={{width: 100, height: 100, margin: 5}}
    >
    </Image>
    <View style={{
      flex: 1,
      flexDirection: 'column',
    }}>
     <TouchableOpacity onPress={this._onPress}>
       <View>
       <Text style={styles.FlatListItemStyle}>{this.props.item.name}</Text>
       <Text style={styles.FlatListItemStyle}>{this.props.item.party}</Text>
       </View>
     </TouchableOpacity>
    </View>
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
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 50,
  },
  FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});
