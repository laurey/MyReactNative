import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class AboutScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>About Tab</Text>
        </View>
        <Text>Hello {this.props.name}!</Text>
      </SafeAreaView>
    );
  }
}
