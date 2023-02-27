import { prettyPrint } from '@common';
import { colors, fontFamily, fontSize, globalStyles } from '@theme';
import React, { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ms, vs } from 'react-native-size-matters';
import Clock from '../../assets/icons/Clock';
export type Props = {};

const RestaurantDetails: React.FC<Props> = ({ route, navigation }) => {
  const { height, width } = useWindowDimensions();
  const [position, setPosition] = useState(0);
  const { bottom } = useSafeAreaInsets();

  const { restaurantDetail } = route?.params;

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: bottom,
        }}>
        <View style={{ height: width, width }}>
          <PagerView
            style={{ height: width, width }}
            onPageSelected={({ nativeEvent }) => {
              setPosition(nativeEvent.position);
            }}
            pageMargin={1}>
            {restaurantDetail.images.map((item: any, index: number) => {
              return (
                <View key={'' + index} style={{ height: width, width }}>
                  <Image
                    source={{ uri: item.url }}
                    style={StyleSheet.absoluteFill}
                  />
                </View>
              );
            })}
          </PagerView>
          <View pointerEvents="none" style={[styles.dotContainer]}>
            {restaurantDetail.images.map((_, i) => {
              const stylesInnerCircles = StyleSheet.flatten([
                styles.circle,
                position === i && styles.currentPage,
              ]);
              return <View style={stylesInnerCircles} />;
            })}
          </View>
          <View style={[styles.positionContainer, globalStyles.defaultShadow]}>
            <Text style={styles.lblPosition}>{position + 1}</Text>
          </View>
        </View>
        <View style={{ height: vs(25) }} />
        <Text style={styles.lblRestaurantName}>{restaurantDetail.title}</Text>
        <Text style={styles.lblRestaurantDescriptionAddress}>
          {restaurantDetail.address}
        </Text>
        <View style={styles.restaurantDetailsContainer}>
          <View style={styles.btn}>
            <Clock />
            <Text style={styles.btnText}>{'10AM - 11AM'}</Text>
          </View>
          <View style={styles.btn}>
            <Clock />
            <Text style={styles.btnText}>{'4.25KM'}</Text>
          </View>
          <View style={styles.btn}>
            <Clock />
            <Text style={styles.btnText}>{'Delivery'}</Text>
          </View>
        </View>
        <Text style={styles.lblRestaurantDescriptionAddress}>
          {restaurantDetail.description}
        </Text>
      </ScrollView>
      <Pressable
        style={{
          backgroundColor: colors.c3DD598,
          height: vs(40),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.lblCall}>{'Call'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotContainer: {
    height: vs(16),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  circle: {
    width: vs(8),
    aspectRatio: 1,
    backgroundColor: 'gray',
    marginHorizontal: ms(2),
    borderRadius: vs(4),
  },
  currentPage: {
    backgroundColor: colors.white,
  },
  positionContainer: {
    height: vs(50),
    position: 'absolute',
    aspectRatio: 1,
    bottom: -vs(25),
    right: ms(16),
    backgroundColor: colors.c3DD598,
    borderTopLeftRadius: ms(16),
    borderBottomRightRadius: ms(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lblCall: {
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.f15,
    color: colors.white,
  },
  lblPosition: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.f22,
    color: colors.white,
  },
  lblRestaurantName: {
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.f18,
    color: colors.black,
    marginHorizontal: ms(16),
  },
  lblRestaurantDescriptionAddress: {
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.f12,
    color: 'gray',
    marginTop: vs(6),
    marginHorizontal: ms(16),
  },
  btnText: {
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.f12,
    color: 'gray',
    marginTop: vs(6),
  },
  restaurantDetailsContainer: {
    flexDirection: 'row',
    marginHorizontal: ms(16),
    marginTop: vs(6),
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RestaurantDetails;
