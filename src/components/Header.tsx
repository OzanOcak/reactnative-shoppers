import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ShoppingCartIcon} from 'react-native-heroicons/solid';

function Header(): JSX.Element {
  return (
    <View className="h-12 border-b-[1px] border-b-gray-400 flex flex-row items-center justify-between">
      <Text className="text-xl uppercase text-gray-950 font-bold">
        Shoppers
      </Text>
      <TouchableOpacity className="relative">
        <ShoppingCartIcon size={30} color="#000000" />
        <View>
          <View
            className="absolute right-0 bottom-0 w-4 h-4 rounded-full bg-blue-900
          items-center justify-center">
            <Text className="text-white text-xs  font-smebold">0</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Header;
