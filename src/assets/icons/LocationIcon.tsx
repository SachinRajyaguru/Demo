import { colors } from '@theme';
import * as React from 'react';
import { ms } from 'react-native-size-matters';
import Svg, { Path, Rect } from 'react-native-svg';

export type Props = {};

const LocationIcon: React.FC<Props> = (props: Props) => {
  return (
    <Svg
      fill="#fff"
      width={ms(34)}
      height={ms(34)}
      viewBox="-87.06 -87.06 569.83 569.83"
      stroke="#fff"
      {...props}>
      <Rect
        x={-87.06}
        y={-87.06}
        width={569.83}
        height={569.83}
        rx={45.586}
        fill={colors.c3DD598}
        stroke="none"
        strokeWidth={0}
      />
      <Path d="M197.849 0C122.131 0 60.531 61.609 60.531 137.329c0 72.887 124.591 243.177 129.896 250.388l4.951 6.738a3.064 3.064 0 0 0 2.471 1.255 3.08 3.08 0 0 0 2.486-1.255l4.948-6.738c5.308-7.211 129.896-177.501 129.896-250.388C335.179 61.609 273.569 0 197.849 0zm0 88.138c27.13 0 49.191 22.062 49.191 49.191 0 27.115-22.062 49.191-49.191 49.191-27.114 0-49.191-22.076-49.191-49.191 0-27.129 22.076-49.191 49.191-49.191z" />
    </Svg>
  );
};

export default LocationIcon;
