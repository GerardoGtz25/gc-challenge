import React, { Component } from 'react';
import {
  AsyncStorage,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Platform,
  Dimensions
} from 'react-native';

import { Icon } from 'react-native-elements'

const screenWidth = Dimensions.get('window').width;

export default class SignIn extends Component {

  state = {
    email: '',
    password: '',
    shouldShow: false
  }

  invitationCode() {
    Alert.alert('Invitation Code');
  }

  forgotPassword() {
    Alert.alert('Forgot Password');
  }

  customerSupport() {
    Alert.alert('Forgot Password');
  }

  cleanState() {
    this.setState({email: ''})
    this.setState({password: ''})
  }

  async setData() {
    try {
      await AsyncStorage.setItem('dataUser', JSON.stringify(this.state));
    } catch (error) {
      console.log(error);
    }
  }

  showPassword() {
    this.setState({shouldShow: !this.state.shouldShow})
  }

  login() {
    if(this.state.email && this.state.password) {
      this.setData();
      this.cleanState();
      this.props.navigation.navigate('AuthLoading');
    } 
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.stretch}
            source={require('./../assets/icon.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.label, {width: 43}]}>Email</Text>
          <View style={styles.inputBorder}>
            <TextInput
              style={[styles.input, {width: "100%"}]}
              value={this.state.email}
              onChangeText={(text) => this.setState({email: text})}
              textContentType="emailAddress"
              autoCorrent={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              placeholder="Email"
              keyboardType="email-address"
            /> 
          </View>
          <Text style={[styles.label, {width: 71}]}>Password</Text>
          <View style={styles.inputBorder}>
          <TouchableOpacity onPress={() => this.showPassword()}>
              {
                this.state.shouldShow ? <Icon type="font-awesome" name="eye" size={20} color="grey"/>
                : <Icon type="font-awesome" name="eye-slash" size={20} color="grey"/> 
              }
            </TouchableOpacity>
            <TextInput
              style={[styles.input, {width: "90%"}]}
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry={!this.state.shouldShow}
              underlineColorAndroid="transparent"
              placeholder="Password"
            />
            
          </View>
          <View style={styles.containerButtonForgot}>
          <TouchableOpacity onPress={this.forgotPassword}>
            <Text style={{color: '#515A5A'}}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        </View>
        
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonActive} onPress={() => this.login()}>
            <Text style={[styles.textButton, {color: '#FFF'}]}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonInactive} onPress={this.invitationCode}>
            <Text style={[styles.textButton, {color: '#8e8e93', fontWeight: 'bold'}]}>INVITATION CODE</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{marginTop: 50}} onPress={this.customerSupport}>
          <Text style={{color: '#3aaa00'}}>Customer Support</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 75
  },
  inputContainer: {
    marginTop: 50
  },
  containerButtonForgot: {
    width: 328,
    alignItems: 'flex-end',
    marginTop: 17
  },
  containerButton: {
    marginTop: 35
  },
  buttonActive: {
    backgroundColor: '#3aaa00',
    width: 311,
    height: 44,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonInactive: {
    backgroundColor: '#fff',
    width: 311,
    height: 44,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    borderColor: '#8e8e93',
    borderWidth: 2
  },
  textButton: {
    letterSpacing: 1.25
  },
  label: {
    color: '#3aaa00',
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: Platform.OS === 'ios' ? 25 : 10,
    marginBottom: -42,
    zIndex: 5,
    padding: 2,
    fontWeight: Platform.OS === 'ios' ? 'bold' : '300',
  },
  inputBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#3aaa00',
    borderRadius: Platform.OS === 'ios' ? 50 : 4,
    borderWidth: Platform.OS === 'ios' ? 2 : 1,
    marginTop: 30,
    height: 45,
    paddingVertical: 8,
    paddingHorizontal: Platform.OS === 'ios' ? 25 : 10,
    width: 328
  },
  input: {
    fontSize: 16
  },
  stretch: {
    width: screenWidth < 711 ? 147.5 : 295,
    height: screenWidth < 711  ? 88.8 : 177.6 ,
    resizeMode: 'stretch'
  }
});