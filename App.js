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
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#ff00a0', '#ffe5b4']} style={styles.linearGradient}>
          <Image source={require('./img/panel.png')} style={styles.panel} />
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
  }
});
