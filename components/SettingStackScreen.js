import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from './SettingScreen';
import DetailScreen from './DetailScreen';

const SettingsStack = createStackNavigator();

class SettingStackScreen extends Component {
  render() {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Setting" component={SettingScreen} />
        <SettingsStack.Screen name="Detail" component={DetailScreen} />
      </SettingsStack.Navigator>
    );
  }
}

export default SettingStackScreen;
