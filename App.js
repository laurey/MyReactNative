/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import ProfileScreen from './components/ProfileScreen';
import AnimateDemo from './components/AnimateDemo';
import AnimateDecay from './components/AnimateDecay';
import AnimateSpring from './components/AnimateSpring';
import AnimateTiming from './components/AnimateTiming';
import AnimateParallel from './components/AnimateParallel';
import AnimateSequence from './components/AnimateSequence';
import FetchDataDemo from './components/FetchDataDemo';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home Overview'}}
          />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="AnimateDemo" component={AnimateDemo} />
          <Stack.Screen name="AnimateDecay" component={AnimateDecay} />
          <Stack.Screen name="AnimateSpring" component={AnimateSpring} />
          <Stack.Screen name="AnimateTiming" component={AnimateTiming} />
          <Stack.Screen name="AnimateParallel" component={AnimateParallel} />
          <Stack.Screen name="AnimateSequence" component={AnimateSequence} />
          <Stack.Screen name="HTTPDemo" component={FetchDataDemo} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
