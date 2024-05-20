import { ReactNode } from 'react';
import { View } from 'react-native';

import { GradientEllipsesBg } from '../GradientEllipsesBg';
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
      <GradientEllipsesBg
        leftEllipsisStyle={styles.leftGradientContainer}
        leftEllipsisSize={leftGradientSize}
        leftGradientStops={leftGradientStops}
        rightEllipsisStyle={styles.rightGradientContainer}
        rightEllipsisSize={rightGradientSize}
        rightGradientStops={rightGradientStops}
      />
      {children}
    </View>
  );
};
