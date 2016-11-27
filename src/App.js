import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyAvGc6RaAlL_9tsG3zo6X7pNuEkgpgTw8U',
    authDomain: 'manager-80f31.firebaseapp.com',
    databaseURL: 'https://manager-80f31.firebaseio.com',
    storageBucket: 'manager-80f31.appspot.com',
    messagingSenderId: '74522914544'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
