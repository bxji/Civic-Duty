import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

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
  }

  render() {
    return (
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
        />
      </View>
    );
  }
}