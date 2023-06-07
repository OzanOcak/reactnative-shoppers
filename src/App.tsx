/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from './components/Header';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Header />
        <Text className="font-bold text-green-500">hello</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
