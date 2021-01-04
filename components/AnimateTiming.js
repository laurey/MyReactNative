import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  Easing,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class AnimationFadeInTiming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: props.route.params.name || 'TIMING',
      btnTxt: 'Press me!',
      opacity: new Animated.Value(0.1),
    };
  }

  startAnimate() {
    let {opacity} = this.state;
    Animated.timing(opacity, {
      toValue: 1,
      delay: 100,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      this.setState({
        txt: 'FINISHED',
      });
    });
  }

  render() {
    let {opacity, txt} = this.state;
    const animateStyle = {
      transform: [
        {scale: opacity},
        {
          translateY: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 0],
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.animated, animateStyle, {opacity}]}>
          <Text style={[styles.txt, styles.txt1]}>{txt}</Text>
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
    width: 100,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 10,
    color: '#FFF',
  },
  txt: {
    width: 60,
    height: 60,
  },
  txt1: {
    backgroundColor: '#ABCCDF',
  },
});
