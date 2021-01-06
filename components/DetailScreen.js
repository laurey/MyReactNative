import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    padding: 16,
    color: '#20232a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    height: 36,
    lineHeight: 30,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#fff',
    borderRadius: 4,
    backgroundColor: '#2296F4',
    alignSelf: 'center',
    textAlign: 'center',
    overflow: 'hidden',
  },
});

class DetailScreen extends Component {
  render() {
    const {navigation, route} = this.props;
    const {now, name, otherParam} = route.params || {};

    return (
      <View style={[styles.flex, styles.container]}>
        <Text>now is: {now}</Text>
        <Text>The otherParam is: {otherParam}</Text>
        <Text>
          Hi!
          <Text style={styles.txt}>{name ? name : 'Anonymous'}</Text>. This is
          Detail Screen
        </Text>
        <Text
          style={styles.button}
          title="Go to Detail... again"
          onPress={() => navigation.navigate('Detail')}>
          Go to Detail... again
        </Text>
        <Text
          style={styles.button}
          onPress={() =>
            navigation.push('Detail', {
              name: 'BBQ',
              now,
              otherParam: '100',
            })
          }>
          To Detail
        </Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default DetailScreen;
