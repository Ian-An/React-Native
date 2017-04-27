import React, { Component } from 'react';
import _ from 'lodash';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete} from '../actions';
import { Card, CardSection, Input, Button, Confirm } from './common';

class EmployEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
  	_.each(this.props.employee, (value, prop) => {
  		this.props.employeeUpdate( { prop,value } );
  	});
  }

  onButtonPress() {
    const { name, phone, shift} = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid}); 
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
  	const { uid } = this.props.employee;
    this.props.employeeDelete({uid});
  }
   
  onDecline() {
  	this.setState({ showModal: false });
  }
  
  render() {
    console.log(this.props.employee);
		return (
          <Card>
          	<CardSection>
          	  <Input
          	  	label="Name"
          	  	value={this.props.name}
          	  	onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text })}
          	  />
          	</CardSection>

          	<CardSection>
          	 <Input
          	  	label="Phone Number"
          	  	value={this.props.phone}
          	  	onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text })}
          	 />
          	</CardSection>
            <CardSection >
              <Picker
                style={{flex: 1 }}
                seolectedValue={this.props.shift}
                onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day})}
              >
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wednesday" value="Wednesday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="Friday" value="Friday" />
              </Picker>
            </CardSection>
          	<CardSection>
            	<Button onPress={this.onButtonPress.bind(this)}>
            	  Save Changes
            	</Button> 
          	</CardSection>

          	<CardSection>
            	<Button onPress={this.onTextPress.bind(this)}>
            	  Text Schedule
            	</Button> 
          	</CardSection>

          	<CardSection>
            	<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            	  Fire Employee
            	</Button> 
          	</CardSection>
          	
          	<Confirm 
          	  visible={this.state.showModal}
          	  onAccept={this.onAccept.bind(this)}
          	  onDecline={this.onDecline.bind(this)}
          	>
          	 Are you sure you want to delete this?
          	</Confirm>

          </Card>
 
		);
	}
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};


const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift};
};


export default connect(mapStateToProps, { 
	employeeUpdate, employeeSave, employeeDelete
	 })(EmployEdit);