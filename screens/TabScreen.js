import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class TabScreen extends Component {

  async logout() {
    await AsyncStorage.setItem('dataUser', '');
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tab Screen</Text>
        <TouchableOpacity style={styles.buttonActive} onPress={() => this.logout()}>
          <Text style={[styles.textButton, {color: '#FFF'}]}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonActive: {
    backgroundColor: '#3aaa00',
    width: 311,
    height: 44,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
})