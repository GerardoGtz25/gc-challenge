import React,  { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';

import AppNavigator from './navigation/AppNavigator';



export default class App extends Component{

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container}>
          <StatusBar hidden={true}/> 
          <AppNavigator/>
        </View>
      </TouchableWithoutFeedback>
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});




