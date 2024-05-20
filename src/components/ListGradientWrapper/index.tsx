import { ReactNode } from 'react';
import { View } from 'react-native';

import { LinearEllipse } from '../UI/LinearEllipse';
import { RadialEllipse } from '../UI/RadialEllipse';
import {
  leftGradientSize,
  leftGradientStops,
  rightGradientSize,
  rightGradientStops,
} from './constants';
import { styles } from './styles';

export const ListGradientWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftGradientContainer}>
        <RadialEllipse
          width={leftGradientSize.width}
          height={leftGradientSize.height}
          stops={leftGradientStops}
        />
      </View>
      <View style={styles.rightGradientContainer}>
        <LinearEllipse
          width={rightGradientSize.width}
          height={rightGradientSize.height}
          stops={rightGradientStops}
        />
      </View>
      {children}
    </View>
  );
};
