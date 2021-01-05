import React, {Component} from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Search from './Search';

class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Text>Home Screen</Text>
        <Text style={{color: 'rgb(0, 103, 155)', fontSize: 20}}>
          Click below Button to Jane's profile
        </Text>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane', tab: 'Discover'})}
        />
        <Button
          title="Go to Http1122 Demo"
          onPress={() => navigate('HTTPDemo', {name: 'http'})}
        />
        <Search />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
