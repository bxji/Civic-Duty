import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Font } from 'expo';

export default class extends React.Component {
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
          Find Your Representative{"\n"}
            <Text style={styles.textSubTitle}>
            </Text>
          </Text>

        ) : null
      }
      </View>
    );
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
  lineStyle:{
    borderWidth: 1,
    borderColor: '#FFFFFF',
    margin:10,
  },
});
