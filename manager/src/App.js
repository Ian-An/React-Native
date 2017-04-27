import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'; 
import Router from './Router'; 

class App extends Component {
	componentWillMount() {
	  const config = {
	    apiKey: "AIzaSyBkK3pNkoVuHXdEjSqetWQFFdQ5HJ6KBiM",
	    authDomain: "manager-76f65.firebaseapp.com",
	    databaseURL: "https://manager-76f65.firebaseio.com",
	    storageBucket: "manager-76f65.appspot.com",
	    messagingSenderId: "277606468911"
	    };

	  firebase.initializeApp(config)
} 
	render() {
	const store = createStore( reducers, {}, applyMiddleware(ReduxThunk));
		return(
	        <Provider store={store}>
	          <Router />
	        </Provider>
	    );
	}
}

export default App;