import React, {Component} from 'react';
import {Animated, View} from 'react-native';

export default class AnimationSequence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.state.bounceValue.setValue(3.5); // Start large

    Animated.spring(
      // Base: spring, decay, timing
      this.state.bounceValue, // Animate `bounceValue`
      {
        useNativeDriver: true,
        tension: 60,
        toValue: 0.8, // Animate to smaller size
        friction: 1, // Bouncier spring
      },
    ).start(); // Start the animation
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Animated.Image
          style={{
            width: 100,
            height: 100,
            transform: [{scale: this.state.bounceValue}],
          }}
          source={{uri: 'https://i.imgur.com/XMKOH81.jpg'}}></Animated.Image>
      </View>
    );
  }
}
