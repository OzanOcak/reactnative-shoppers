import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import {Image} from 'react-native';

interface Item {
  _id: number;
  brand: string;
  category: string;
  des: string;
  image: string;
  isNew: boolean;
  oldPrice: string;
  price: string;
  title: string;
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch('https://fakestoreapiserver.reactbd.com/walmart');
    const data = await res.json();
    setProductsData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Header />
      <ScrollView>
        {loading ? (
          <View className="p-2">
            <Text className="font-bold">Product Data is Loading ....</Text>
          </View>
        ) : (
          <View>
            <View className="items-center py-2">
              <Text className="text-lg text-black font-bold capitalize">
                Shoppers online Shopping Store
              </Text>
              <Text className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi nam expedita dolorem veritatis impedit similique unde
                fugiat iusto neque blanditiisa.
              </Text>
            </View>
            {/** Products */}
            <View>
              {productsData.map((item: Item) => (
                <View
                  key={item._id}
                  className="mb-6 border-[1px] border-gray-400 rounded-lg p-4">
                  <Image
                    source={{uri: item.image}}
                    alt={item.title}
                    className="w-full h-80"
                  />
                  <View className="gap-2 px-2">
                    <Text className="text-lg text-black font-bold">
                      {item.title}
                    </Text>
                    <Text className="text-base">
                      Price:{' '}
                      <Text className="text-black font-semibold">
                        <Text>{item.price}</Text>
                      </Text>{' '}
                      <Text className="text-gray-600 line-through">
                        {item.oldPrice}
                      </Text>
                    </Text>
                    <Text className="text-base">
                      Category:{' '}
                      <Text className="text-black">{item.category}</Text>
                    </Text>
                    <Text className="text-sm tracking-white">{item.des}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
