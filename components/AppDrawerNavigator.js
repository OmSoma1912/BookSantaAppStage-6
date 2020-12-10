import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSidebarMenu from './CustomSidebarMenu';
import SettingsScreen from '../screens/SettingsScreen';

export const AppDrawer = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
  },
  Settings : {
    screen : SettingsScreen
  },
  },
  {
    contentComponent : CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
})