import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
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
    if (this.state.isTicking) {
      return;
    }

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
          <View style={styles.panelContainer}>
            <Image source={require('./images/panel.png')} style={styles.panel} />
            <TouchableOpacity
              onPress={this.handleStart}
              style={[styles.commandButton, styles.startButton]}>
              <Text style={styles.commandText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleStop}
              style={[styles.commandButton, styles.stopButton]}>
              <Text style={styles.commandText}>Stop</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleClear}
              style={[styles.commandButton, styles.clearButton]}>
              <Text style={styles.commandText}>Clear</Text>
            </TouchableOpacity>
            <Text style={styles.timerText}>{this.state.timerDuration.format()}</Text>
          </View>
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
  },
  linearGradient: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panelContainer: {
    height: 375,
    aspectRatio: 0.9,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel: {
    /* TODO: Nothing works if these values aren't hardcoded */
    height: 375,
    width: 0.9 * 375,
    position: 'absolute',
  },
  commandButton: {
    height: 100,
    width: 100,
    backgroundColor: 'transparent',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commandText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  startButton: {
    top: 10,
    left: 120,
  },
  stopButton: {
    top: 195,
    left: 5,
  },
  clearButton: {
    top: 195,
    right: 5,
  },
  timerText: {
    position: 'absolute',
    top: 160,
    left: 102,

    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 36,
  },
});
