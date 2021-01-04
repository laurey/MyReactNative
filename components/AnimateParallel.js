import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  Easing,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class AnimationFadeParallel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: props.route.params.name || 'Parallel',
      btnTxt: 'Press me!',
      position: new Animated.ValueXY(),
      fontSize: new Animated.Value(0),
      scale: new Animated.Value(0),
      rotation: new Animated.Value(0),
      opacity: new Animated.Value(0),
    };
  }

  startAnimate() {
    Animated.parallel(
      ['opacity', 'rotation', 'scale', 'fontSize'].map((property) => {
        return Animated.timing(this.state[property], {
          toValue: 1,
          duration: 2000,
          easing: Easing.bounce,
          useNativeDriver: false,
        });
      }),
    ).start();
  }

  render() {
    let {opacity, txt, rotation, scale, fontSize} = this.state;

    const animateStyle = {
      transform: [
        {scale},
        {
          rotateZ: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.animated, animateStyle, {opacity}]}>
          <Animated.Text
            style={[
              styles.txt,
              styles.txt1,
              {
                fontSize: fontSize.interpolate({
                  inputRange: [0, 1],
                  outputRange: [12, 60],
                }),
              },
            ]}>
            {txt}
          </Animated.Text>
        </Animated.View>
        <TouchableHighlight
          onPress={this.startAnimate.bind(this)}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.state.btnTxt}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  animated: {
    // flex: 1,
    alignItems: 'center',
  },
  button: {
    margin: 0,
    // width: 100,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 10,
    color: '#FFF',
  },
  txt: {
    // width: 60,
    // height: 60
  },
  txt1: {
    backgroundColor: '#ABCCDF',
  },
});
