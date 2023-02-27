import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export type Props = {
  rating: number;
};

const RestaurantRating: React.FC<Props> = ({ rating }) => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      horizontal
      renderItem={({ item, index }) => {
        if (item < rating) {
          return <Text>✓</Text>;
        } else {
          return <Text>✗</Text>;
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RestaurantRating;
