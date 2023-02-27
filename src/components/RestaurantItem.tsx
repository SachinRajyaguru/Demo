import LocationIcon from '../assets/icons/LocationIcon';
import { colors, fontSize, globalStyles } from '@theme';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { ms, vs } from 'react-native-size-matters';
import RestaurantRating from './RestaurantRating';

interface RestaurantItemProps {
  id?: number;
  title?: string;
  address?: string;
  latitude?: string;
  longitude?: string;
  rating: number;
  total_review?: number;
  description?: string;
  mobile?: string;
  images: {
    url: string;
  }[];
  onPressRestaurant: (
    data: Omit<RestaurantItemProps, 'onPressRestaurant'>,
  ) => void;
}

const RestaurantItem: React.FC<RestaurantItemProps> = props => {
  const { title, rating, images, onPressRestaurant } = props;

  return (
    <Pressable onPress={() => onPressRestaurant(props)} style={styles.main}>
      <Image source={{ uri: images[0].url }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18 }}>{title}</Text>
        <RestaurantRating rating={rating} />
      </View>
      <Pressable style={styles.locationIcon}>
        <LocationIcon />
      </Pressable>
    </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  main: {
    // height: vs(75),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: ms(16),
    marginTop: ms(16),
    padding: ms(12),
    backgroundColor: colors.white,
    ...globalStyles.defaultShadow,
  },
  image: {
    width: ms(75),
    height: ms(75),
    borderRadius: ms(6),
    marginRight: ms(15),
  },
  locationIcon: {
    height: ms(34),
    width: ms(34),
    backgroundColor: colors.c3DD598,
    borderRadius: ms(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
