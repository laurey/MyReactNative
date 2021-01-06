import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  message: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  messageTitle: {
    fontSize: 18,
    color: '#1899ff',
    marginBottom: 5,
  },
  contact: {
    height: 70,
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  contactMessage: {
    height: 30,
  },
});

export default class ProfileScreen extends Component {
  render() {
    const {navigate, goBack} = this.props.navigation;

    return (
      <SafeAreaView style={styles.flex}>
        <ScrollView>
          <View>
            <Text>This is Jane's profile screen</Text>
            <Button
              title="Go to Details"
              onPress={() =>
                navigate('Detail', {name: 'Jane', now: Date.now()})
              }
            />
            <Button
              title="Go to Animated Demo Screen"
              onPress={() =>
                navigate('AnimateDemo', {name: 'Jane', now: Date.now()})
              }
            />
            <Button title="Go back" onPress={() => goBack()} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
