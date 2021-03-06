import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Deck from './src/Deck';
import { Card, Button, Header } from 'react-native-elements'
import firebase from 'firebase';

const DATA = [
  { id: 1, text: 'Andria', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];


class App extends Component {

  componentWillMount() {
     firebase.initializeApp({
    apiKey: "AIzaSyBe2HlQsFOqGal5cmI1DLVnVQZfFrEsMBc",
    authDomain: "auth-react-native-fbe32.firebaseapp.com",
    databaseURL: "https://auth-react-native-fbe32.firebaseio.com",
    projectId: "auth-react-native-fbe32",
    storageBucket: "auth-react-native-fbe32.appspot.com",
    messagingSenderId: "239636965928"
  });
  }
  renderCard(item) {
    return (

        <Card

          key={item.id}
          title={item.text}
          image={{uri: item.uri}}
        >
          <Text style={{ marginBottom: 10}}>
            I can customize this card further
          </Text>
          <Button
            icon={{ name: 'code'}}
            backgroundColor="#03A9F4"
            title="View Now!"
          />
        </Card>
    )
  }

  renderNoMoreCards() {

    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10}}>There are no more cards to swipe</Text>
        <Button
          backgroundColor="#03A9F4"
          title="Get More Cards!"
        >
        </Button>
      </Card>
    )
  }

  render() {
    return (
        <View style={styles.container}>
          <Deck
            data={DATA}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}

          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});



export default App;
