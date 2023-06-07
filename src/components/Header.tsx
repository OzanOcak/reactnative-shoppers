import {View, Text} from 'react-native';
import React from 'react';

function Header(): JSX.Element {
  return (
    <View className="h-12 border-b-[1px] border-b-gray-400 flex-row-items-center justify-between">
      <Text className="text-xl uppercase text-gray-950 font-bold">
        Shoppers
      </Text>
    </View>
  );
}

export default Header;
