import React, { Component } from 'react';
import {
  Text,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Image,
  View,
} from 'react-native';

export default class SignUp extends Component {

  render() {
    return (
      <View>
        <Image
          style={styles.stretch}
          source={{ uri: 'asset:/app_icon.png' }}
        />
        <Text>SignUp Screen</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  stretch: {
    width: 88.8,
    height: 147.5,
    resizeMode: 'stretch'
  }
});