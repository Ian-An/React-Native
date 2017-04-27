import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
//onPress={() => Linking.openURL(url)}
const Button = (props) => {
	const { buttonStyle, textStyle } = styles;
	
	return (
    <TouchableOpacity onPress={() => Linking.openURL(props.url)} style={buttonStyle}>
      <Text style={textStyle}> 
      Click To Buy 
      </Text>
    </TouchableOpacity>
	); 
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  } 
};

export default Button;
