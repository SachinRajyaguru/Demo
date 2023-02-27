import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors, MyTheme } from '@theme';
import { screenOptions } from './screenOptions';
import { Login, RestaurantDetails, RestaurantList } from '@screens';
import { useSelector } from 'react-redux';
import type { MyStackParamList } from '../../@types/MyStackParamList';

const Stack = createStackNavigator<MyStackParamList>();

const AppNavigation = () => {
  const isNotAuthenticated = useSelector(
    (state: any) => !state.auth.isAuthenticated,
  );

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={screenOptions}>
        {isNotAuthenticated ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="RestaurantList"
              component={RestaurantList}
              options={{
                title: 'Restaurant List',
                headerStyle: {
                  backgroundColor: colors.c3DD598,
                },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name="RestaurantDetails"
              component={RestaurantDetails}
              options={{
                title: 'Restaurant Details',
                headerStyle: {
                  backgroundColor: colors.c3DD598,
                },
                headerTintColor: 'white',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
