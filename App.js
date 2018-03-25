import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: -1,
      isTicking: false,
      originalDuration: new Duration(),
      timerDuration: new Duration()
    };
  }

  handleStart() {
    var intervalId = setInterval(() => {
      this.setState(previousState => {
        assert(previousState.intervalId !== -1);
        return {
          intervalId: previousState.intervalId,
          isTicking: previousState.isTicking,
          originalDuration: previousState.originalDuration,
          timerDuration: previousState.timerDuration.tick()
        };
      });
    }, 1000);

    this.setState(previousState => {
      return {
        intervalId: intervalId,
        isTicking: true,
        originalDuration: previousState.originalDuration,
        timerDuration: previousState.originalDuration
      }
    });
  }

  handleStop() {
    clearInterval(this.state.intervalId);

    this.setState(previousState => {
      return {
        intervalId: -1,
        isTicking: false,
        originalDuration: new Duration(),

      }
    });
  }

  handleClear() {
    clearInterval(this.state.intervalId);

    this.setState(previousState => {
      return {
        intervalId
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#ff00a0', '#ffe5b4']} style={styles.linearGradient}>
          <Image source={require('./img/panel.png')} style={styles.panel} />
          <Button onClick={this.handleStart} style={styles.commandButton} />
          <Button onClick={this.handleStop} style={styles.commandButton} />
          <Button onClick={this.handleClear} style={styles.commandButton} />
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
  }
});
