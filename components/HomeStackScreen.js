import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import FetchDataScreen from './FetchDataDemo';

const HomeStack = createStackNavigator();

class HomeStackScreen extends Component {
  render() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Detail" component={DetailScreen} />
        <HomeStack.Screen name="HTTPDemo" component={FetchDataScreen} />
      </HomeStack.Navigator>
    );
  }
}

export default HomeStackScreen;
