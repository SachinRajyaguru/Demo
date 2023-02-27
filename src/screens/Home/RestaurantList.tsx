import { RestaurantItem } from '@components';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, FlatList, Text, View } from 'react-native';
import axios from 'axios';
import { prettyPrint } from '@common';
// import { saveRestaurantsToRealm } from '@api';

interface Restaurant {
  id: number;
  title: string;
  address: string;
  latitude: string;
  longitude: string;
  rating: number;
  total_review: number;
  description: string;
  mobile: string;
  images: {
    url: string;
  }[];
}

const getRestaurantList = async () => {
  const API_URL = 'http://205.134.254.135/~mobile/interview/public/api';
  try {
    const response = await axios.get(`${API_URL}/restaurants_list`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export type Props = {
  navigation: any;
};
const RestaurantList: React.FC<Props> = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    const fetchRestaurantList = async () => {
      const data = await getRestaurantList();
      if (data.status === 1) {
        // saveRestaurantsToRealm(data.data);
        setRestaurants(data.data);
      }
    };

    fetchRestaurantList();
  }, []);

  console.log(restaurants);

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantItem
            {...item}
            onPressRestaurant={data => {
              navigation.navigate('RestaurantDetails', {
                restaurantDetail: data,
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RestaurantList;
