/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SvgUri from 'react-native-svg-uri';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#ff00a0', '#ffe5b4']} style={styles.linearGradient}>
          <SvgUri source={require('./img/panel.svg')} style={StyleSheet.flatten(styles.panel)}>
          </SvgUri>
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
  },
  panel: {
    width: 200,
    height: 200,
  },
});
