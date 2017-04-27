import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	state ={ email: '', password: '', error: '', loading: false };
	onButtonPress() {
		const { email, password } = this.state;
		
		this.setState({ error: '', loading: true });
		
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(this.onLoginSuccess.bind(this))
		.catch(() => {
           firebase.auth().createUserWithEmailAndPassword(email, password)
           .then(this.onLoginSuccess.bind(this))
           .catch(this.onLoginFail.bind(this));
		});
	} 

	onLoginFail() {
		this.setState({ error: 'Authentication Failed', loading: false });
	}

	onLoginSuccess() {
	this.setState({ 
     email: '',
     password: '',
     error: '',
     loading: false
     });
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}
		return (
        <Button onPress={this.onButtonPress.bind(this)}>
             Log in
        </Button> 
		);
	}

	render() {
		return (
        <Card>
          <CardSection>
            <Input
             placeholder="username@drexel.edu"
             label="Email"
             value={this.state.email}
             onChangeText={email => this.setState({ email })}
            /> 
          </CardSection> 
          
          <CardSection>
          <Input
            placeholder="password"
            value={this.state.password}
            label="Password"
            onChangeText={password => this.setState({ password })}
            secureTextEntry // this is the same as a 'True'
          />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
           {this.renderButton()}
          </CardSection>
        </Card>
        
	);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;

