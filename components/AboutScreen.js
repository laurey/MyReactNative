import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class AboutScreen extends Component {
  onChangeText = (txt) => {
    console.log('text: ', txt);
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>About Tab</Text>
        </View>
        <Text>Hello {this.props.name}!</Text>
        <View>
          <TextInput
            placeholder="Please Input"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.onChangeText(text)}
            // value={value}
          />
        </View>
      </SafeAreaView>
    );
  }
}
