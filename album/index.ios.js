// Index.ios.js - place code in here for IOS!!!

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create a component

//flex : 1 is for users to scroll the screen
const App = () => (
  <View style={{ flex: 1 }}> 
    <Header headerText={'[Album]'} />
    <AlbumList />
  </View>
    );
  

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
