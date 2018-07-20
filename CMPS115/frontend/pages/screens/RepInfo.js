import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Font } from 'expo';
import { createStackNavigator } from 'react-navigation';

class RepInfo extends React.Component {

    state = {
        fontLoaded = false,
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Georgia': require('./assets/fonts/GeorgiaBold.ttf'),
            'Baskerville': require('./assets/fonts/Baskerville.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        const { navigation } = this.props;
        const person = navigation.getParam('rep', null);

        return (
            <View style={styles.backgroundColor}>
                <Text>{person.name}</Text>
                <Image
                    style={{width: 60, height: 80}}
                    source={{uri: person.photoUrl}}
                />
                <Text>Email: {person.emails[0]}</Text>
                <Text>Phone: {person.phones[0]}</Text>
                <Text>Party: {person.party == '' ? 'None' : person.party}</Text>

            </View>
        )
    }
}

let bg_color = 'gray';
if (this.props.navigation.state.party == 'Republican') { bg_color = 'red'; }
else if (this.props.navigation.state.party == 'Democratic') { bg_color = 'blue'; }
else { bg_color = 'gray'; }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bg_color,
      alignItems: 'center',
    },
    MainContainer: {
        justifyContent: 'center',
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginTop: 50,
    },
});