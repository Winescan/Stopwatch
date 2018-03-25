import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Duration from './Duration';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: -1,
      isTicking: false,
      timerDuration: new Duration()
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleStart() {
    var intervalId = setInterval(() => {
      this.setState(previousState => {
        return {
          intervalId: previousState.intervalId,
          isTicking: previousState.isTicking,
          timerDuration: previousState.timerDuration.tick()
        };
      });
    }, 1000);

    this.setState(previousState => {
      return {
        intervalId: intervalId,
        isTicking: true,
        timerDuration: previousState.timerDuration
      };
    });
  }

  handleStop() {
    clearInterval(this.state.intervalId);

    this.setState(previousState => {
      return {
        intervalId: -1,
        isTicking: false,
        timerDuration: previousState.timerDuration
      };
    });
  }

  handleClear() {
    clearInterval(this.state.intervalId);

    this.setState(previousState => {
      return {
        intervalId: -1,
        isTicking: false,
        timerDuration: new Duration()
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#ff00a0', '#ffe5b4']} style={styles.linearGradient}>
          <Image source={require('./img/panel.png')} style={styles.panel} />
          <Button title="Start" onPress={this.handleStart} style={styles.commandButton} />
          <Button title="Stop" onPress={this.handleStop} style={styles.commandButton} />
          <Button title="Clear" onPress={this.handleClear} style={styles.commandButton} />
          <Text style={styles.timerText}>Hello world. {this.state.timerDuration.toString()}</Text>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  linearGradient: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel: {
    height: 375,
    aspectRatio: 0.9,
  },
  timerText: {
  },
});
