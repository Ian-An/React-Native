import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';// Directly go to index.js
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null }
	componentWillMount() {
	firebase.initializeApp({
        apiKey: 'AIzaSyAbCCImTPuRbRSvdaIHKxUMNCyrG_QkZd0',
        authDomain: 'authentification-e0792.firebaseapp.com',
        databaseURL: 'https://authentification-e0792.firebaseio.com',
        storageBucket: 'authentification-e0792.appspot.com',
        messagingSenderId: '466331125048'
  });
    firebase.auth().onAuthStateChanged((user) => {
       if (user){
     	this.setState({ loggedIn: true });
       }
       else {
     	this.setState({ loggedIn: false });
       }
       
    });

}

    renderContent() {
    switch (this.state.loggedIn) {
    	case true:
          return (
            <View>
          	<Header headerText="Gilt" /> 
          	<Button onPress={() => firebase.auth().signOut()}> 
          	Log Out 
          	</Button>
          	</View>
          	);
    	case false:
          return (
          	<View>
          	<Header headerText="WELCOME" /> 
          	<LoginForm />
            </View>
          	);
    	default:
    	  return (
    	  <View>
    	  <Spinner size='large' />
    	  </View>);

    }
    }
	render() {
		return (
        <View>
          {this.renderContent()}
        </View>
		);
	}
}
export default App;
