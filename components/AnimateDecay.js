import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, PanResponder} from 'react-native';

export default class AnimateDecay extends Component {
  UNSAFE_componentWillMount() {
    this.animatedValue = new Animated.ValueXY();

    this._value = {x: 0, y: 0};
    // this.animatedValue.addListener((value) => (this._value = value));

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValue.setOffset({
          x: this.animatedValue.x._value,
          y: this.animatedValue.y._value,
        });
        // this.animatedValue.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event(
        [null, {dx: this.animatedValue.x, dy: this.animatedValue.y}],
        {useNativeDriver: true},
      ),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValue.flattenOffset();
        Animated.decay(this.animatedValue, {
          deceleration: 0.997,
          useNativeDriver: true,
          velocity: {x: gestureState.vx, y: gestureState.vy},
        }).start();
      },
    });
  }

  render() {
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform(),
    };

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, animatedStyle]}
          {...this.panResponder.panHandlers}>
          <Text style={styles.text}>Drag Me</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
});
