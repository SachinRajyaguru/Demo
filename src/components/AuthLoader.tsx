import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function AuthLoader() {
  const isLoading = useSelector((state: any) => state.auth.isLoading);

  if (isLoading) {
    return (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
  return null;
}
