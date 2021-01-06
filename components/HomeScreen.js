import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Search from './Search';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    justifyContent: 'center', // Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  title: {
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 4,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
  },
  button: {
    width: 120,
    height: 36,
    lineHeight: 30,
    margin: 10,
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#20232a',
  },
});

class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.flex}>
        <Text
          style={styles.button}
          onPress={() => navigate('Profile', {name: 'Jane', tab: 'Discover'})}>
          Jane's Profile
        </Text>
        <Text
          style={styles.button}
          onPress={() => navigate('HTTPDemo', {name: 'http'})}>
          Http Demo
        </Text>
        <View style={[styles.flex, styles.container]}>
          <Text
            style={styles.title}
            onPress={() =>
              navigate('Detail', {name: 'RN', now: new Date().toString()})
            }>
            React Native
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
