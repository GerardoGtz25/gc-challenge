import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import TabScreen from '../screens/TabScreen';

const tabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel:"Contract",
      tabBarIcon: ({ tintColor }) => (
        <Icon type="font-awesome" name="file" size={20} color={tintColor} />
      )
    }
  },
  Tab: {
    screen: TabScreen,
    navigationOptions: {
      tabBarLabel:"Batch",
      tabBarIcon: ({ tintColor }) => (
        <Icon type="font-awesome" name="list-alt" size={20} color={tintColor} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#3aaa00',
    labelStyle: {
      fontSize: 12,
    },
  }
});

export default tabNavigator;