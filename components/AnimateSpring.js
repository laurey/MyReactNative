import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class AnimateSpring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'spring',
      btnTxt: 'Press',
      scale: new Animated.Value(2),
      position: new Animated.ValueXY(),
    };
  }

  componentDidMount() {
    // Add a listener for the delta value change
    this._val = {
      x: 0,
      y: 0,
    };

    // this.state.position.addListener((value) => this._val = value);

    // Initialize PanResponder with move handling
    // adjusting delta value
    // this.state.position.setValue({
    //   x: 0,
    //   y: 0
    // })
  }

  startAnimate() {
    let {scale, position} = this.state;
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 1.5,
        tension: 20,
        friction: 3,
        delay: 20,
        useNativeDriver: true,
      }),
      Animated.spring(position, {
        toValue: {x: 10, y: 20},
        friction: 3,
        velocity: 40,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this._resetScale();
    });
  }

  _resetScale() {
    Animated.spring(this.state.scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      this.setState({
        txt: 'spring',
      });
    });
  }

  render() {
    let {txt, scale, position} = this.state;

    const animatedStyle = {
      transform: [
        {
          translateX: position.x.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100],
          }),
        },
        {
          translateY: position.y.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200],
          }),
        },
        {
          scale,
        },
      ],
    };

    // const animatedStyle = {
    //   transform: position.getTranslateTransform()
    // }

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.animated, animatedStyle]}>
          <Text style={[styles.txt, styles.txt2]}>{txt}</Text>
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
    backgroundColor: '#ABCCDF',
  },
});
