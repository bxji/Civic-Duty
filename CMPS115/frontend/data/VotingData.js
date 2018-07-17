import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';


export default class VotingData extends React.Component {
    constructor(props) {
        super(props);
        state = {
          dataSource: [],
        }
        this.state = {
            title: 'hey'
        }
        this.title = "hi";
    }

    componentDidMount() {
        {/*return fetch('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY')
            .then((response) => response.json())
            .then((responseJson) => {

            this.setState({
                dataSource: responseJson.elections,
            }, function() {

            });
        })*/}
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
                    renderItem={({item, index})=>{
                      return (
                        <FlatListItem item={item} index={index}>
                        </FlatListItem>);
                    }}
                    //ItemSeparatorComponent = {this.FlatListItemSeparator}
                    //keyExtractor={(item,index) => index.toString()}
                    //renderItem = {({item}) => <Text style={styles.FlatListItemStyle}>{item.name}</Text>}
                />
          </View>
        );
    }
}

class FlatListItem extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: this.props.index % 2 == 0 ? '#CC0000':'#FFFFFF',
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
        <Text style={styles.FlatListItemStyle}>{this.props.item.name}</Text>
        <Text style={styles.FlatListItemStyle}>{this.props.item.party}</Text>
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
