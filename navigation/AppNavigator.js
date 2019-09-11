import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from '../screens/Auth';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';

// import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: Auth,
    App: TabNavigator,
    Auth: StackNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  })
);