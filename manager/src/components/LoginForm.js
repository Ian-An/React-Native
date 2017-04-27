import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
// Chaging state frequently makes codes run slow
// i.e refactor the codes in terms of the password and email address
// Take elderfit searchbar component as example
//const image_url = 'http://b-i.forbesimg.com/hennainam/files/2013/10/300px-Work_life_balance_rat_race5.png';


class LoginForm extends Component {
	onEmailChange(text) {
      this.props.emailChanged(text);
	}
    
    onPasswordChange(text) {
      this.props.passwordChanged(text);
    }

    onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
    }
    renderButton() {
    	if(this.props.loading){
    		return <Spinner size="large" />;
    	}
    	return(
	    	<Button onPress={this.onButtonPress.bind(this)}>
			Login
			</Button>
			);
    }
    

	render() {
		return (
		  <Card>
		  	<CardSection> 
		  	  <Input
		  	    label="Email"
		  	    placeholder="email@gmail.com"
		  	    onChangeText={this.onEmailChange.bind(this)}
		  	    value={this.props.email}
		  	  />
		  	</CardSection> 

		  	<CardSection>
		  	  <Input
		  	    secureTextEntry
		  	    label="Password"
		  	    placeholder="password"
		  	    onChangeText={this.onPasswordChange.bind(this)}	
                value={this.props.password}
		  	  />
		  	</CardSection>
		  	<Text style={styles.errorTextStyle}>
		  	  {this.props.error}
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

const mapStateToProps = ({ auth }) =>{
	const { email, password, error, loading } = auth;
	return{ email, password, error, loading };
};

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged,
	loginUser 
})(LoginForm);
 