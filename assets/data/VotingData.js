import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';


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
  _onPress = () => {
    this.props.navigation.push('Details')
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

class RepPage extends React.Component {
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
      <View style={styles.container}>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: FlatListItem,
    },
    Details: {
      screen: RepPage,
    },
  },
  {
    initialRouteName: 'Home',
  }
);



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
