import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
	renderDescription() {
		const { expanded } = this.props;
		if (expanded) {
			return (
				<Text stlye={{ flex: 1 }}>
				{this.props.library.description}
				</Text>
			);
		}
	}

	render() {
	const { titleStyle } = styles;
	const { id, title } = this.props.library;
      return (
       <TouchableWithoutFeedback
         onPress={() => this.props.selectLibrary(id)}
       >
        <View>
         <CardSection>
          <Text style={titleStyle}>
            {title}
          </Text>
         </CardSection>
          {this.renderDescription()}
        </View>
       </TouchableWithoutFeedback>
     
      );
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded };// expanded is a boolean var
};


export default connect(mapStateToProps, actions)(ListItem);
//bind actioncreator to this component
