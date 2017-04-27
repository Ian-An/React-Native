import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    //I want title, artist, thumbnail_imag from the album
    //the album object.
	return ( 
      <Card>
       <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
       </CardSection>
       <CardSection>  
         <Image style={styles.imageStyle}source={{ uri: image }} />
       </CardSection>
       
       <CardSection>
         <Button url={url}>
             Buy Now!
         </Button>
       </CardSection>
      </Card> 
	);   
};

const styles = {
	headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
	},
	titleStyle: {
		fontSize: 20
	},
	thumbnailStyle: {
		height: 60,
		width: 60 
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null

	}
	
	
};
export default AlbumDetail; 
