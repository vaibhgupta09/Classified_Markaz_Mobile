/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Routes from './Routes';
import {Root} from 'native-base'

const App = () => {
  return (
    <Root>
    <Routes />    
  </Root>
  );
};

export default App;
