import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class DetailsScreen extends Component {
  render() {
    const {navigation, route} = this.props;
    const {now, name, otherParam} = route.params;

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text>The ItemId is: {now}</Text>
        <Text>The otherParam is: {otherParam}</Text>
        <Text>
          Hi!
          {name ? (
            <Text style={{fontWeight: 'bold', fontSize: 18, margin: 10}}>
              {name}
            </Text>
          ) : (
            'Anonymous'
          )}
          . This is Detail Screen
        </Text>
        <Button
          title="Go to Detail... again"
          onPress={() => navigation.navigate('Detail')}
        />
        <Button
          title="Go to Detail with push... again"
          onPress={() =>
            navigation.push('Detail', {
              name,
              now,
              otherParam: '100',
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default DetailsScreen;
