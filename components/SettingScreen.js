import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

class SettingScreen extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Button
          title="Go to Detail... again"
          onPress={() => navigation.navigate('Detail')}
        />
        <Button
          title="Go to Detail with push... again"
          onPress={() =>
            navigation.push('Detail', {
              otherParam: '100',
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </SafeAreaView>
    );
  }
}

export default SettingScreen;
