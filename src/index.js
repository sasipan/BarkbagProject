import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider,createStore } from 'react-redux';

import AppNavigator from './config/router';

class App extends Component {
  render() {
    const { container } = styles;
    return (
      <Provider styles={ container } >
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;