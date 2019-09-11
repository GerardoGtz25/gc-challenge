import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class HomeScreen extends Component {

  state = {
    email: ''
  }

  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const dataUser = await AsyncStorage.getItem('dataUser');
    dataJSON = JSON.parse(dataUser)
    this.setState({email: dataJSON.email})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.stretch}
            source={require('./../assets/icon.png')}
          />
        </View>
        <Text>Login as:</Text>
        <Text>{ this.state.email }</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 85
  },
})