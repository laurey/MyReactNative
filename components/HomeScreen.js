import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Search from './Search';

class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Text>Home Screen</Text>
        <Text style={{color: 'rgb(0, 103, 155)', fontSize: 20}}>
          Click below Button to Jane's profile
        </Text>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
        <Button
          title="Go to Http Demo"
          onPress={() => navigate('HTTPDemo', {name: 'http'})}
        />
        <Search />
      </View>
    );
  }
}

export default HomeScreen;
