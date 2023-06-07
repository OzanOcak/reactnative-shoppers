/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Home from './screens/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View className="px-2">
        <Home />
      </View>
    </SafeAreaView>
  );
}

export default App;
