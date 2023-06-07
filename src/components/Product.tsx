import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Product = ({item}: any) => {
  return (
    <View className="mb-6 border-[1px] border-gray-400 rounded-lg p-4">
      <TouchableOpacity>
        <Image
          source={{uri: item.image}}
          alt={item.title}
          className="w-full h-80"
        />
      </TouchableOpacity>

      <View className="gap-2 px-2">
        <Text className="text-lg text-black font-bold">{item.title}</Text>
        <Text className="text-base">
          Price:{' '}
          <Text className="text-black font-semibold">
            <Text>{item.price}</Text>
          </Text>{' '}
          <Text className="text-gray-600 line-through">{item.oldPrice}</Text>
        </Text>
        <Text className="text-base">
          Category: <Text className="text-black">{item.category}</Text>
        </Text>
        <Text className="text-sm tracking-white">{item.des}</Text>
        <TouchableOpacity className="w-full h-10 bg-yellow-600 rounded-full items-center justify-center">
          <Text className="text-lg text-white font-bold ">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
