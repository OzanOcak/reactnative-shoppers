import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import Product from '../components/Product';

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
                <View key={item._id}>
                  <Product item={item} />
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
