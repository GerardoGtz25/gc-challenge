import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'

export default StackNavigator = createStackNavigator({ 
  SignUp: SignUp,
  SignIn: SignIn
}, {
  initialRouteName: 'SignIn',
  headerMode: 'none'
});