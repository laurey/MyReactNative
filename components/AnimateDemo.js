import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default class AnimateDemo extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title', 'An Animation Demo Page'),
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Button
          title="Timing"
          onPress={() => navigate('AnimateTiming', {name: 'timing'})}
        />
        <Button
          title="Spring"
          onPress={() => navigate('AnimateSpring', {name: 'spring'})}
        />
        <Button
          title="Decay"
          onPress={() => navigate('AnimateDecay', {name: 'decay'})}
        />
        <Button
          title="Parallel"
          onPress={() => navigate('AnimateParallel', {name: 'parallel'})}
        />
        <Button
          title="Sequence"
          onPress={() => navigate('AnimateSequence', {name: 'sequence'})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
});
