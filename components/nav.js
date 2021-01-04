import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ProfileScreen from './ProfileScreen';
// import AnimateDemo from './animate-demo';
// import AnimateTiming from './animate-timing';
// import AnimateDecay from './animate-decay';
// import AnimateSpring from './animate-spring';
// import AnimateParallel from './animate-parallel';
// import AnimateSequence from './animate-sequence';

const Stack = createStackNavigator();

function NaviApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// createStackNavigator({
//   // Home: {
//   //   screen: HomeScreen
//   // },
//   // Profile: {
//   //   screen: ProfileScreen
//   // }
//   Home: HomeScreen,
//   Detail: DetailScreen,
//   Profile: ProfileScreen,
//   AnimateDemo: AnimateDemo,
//   AnimateTiming: AnimateTiming,
//   AnimateDecay: AnimateDecay,
//   AnimateSpring: AnimateSpring,
//   AnimateParallel: AnimateParallel,
//   AnimateSequence: AnimateSequence,
// }, {
//     initialRouteName: 'Home'
//   });

export default NaviApp;
