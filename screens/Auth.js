import React, { Component } from 'react';
import {
  ImageBackground,
  AsyncStorage,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class Auth extends Component {

  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const dataUser = await AsyncStorage.getItem('dataUser');

    setTimeout(() => {
      this.props.navigation.navigate(dataUser ? 'App' : 'Auth');
    }, 3000) 
  }

  render() {
    return (
      <ImageBackground source={require('./../assets/background.png')} style={styles.imageBackground}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Image
              style={styles.stretch}
              source={require('./../assets/icon.png')}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textCopiright}>GrainChain {'\u00A9'} 2019 </Text>
        </View> 
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: 'row'
  },
  stretch: {
    width: screenWidth < 711 ? 147.5 : 295,
    height: screenWidth < 711  ? 88.8 : 177.6 ,
    resizeMode: 'stretch',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  textCopiright: {
    color: '#3aaa00',
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 20
  }
});