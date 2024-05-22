import { View } from 'react-native';

import { LinearEllipse } from '@/components/UI/LinearEllipse';
import { RadialEllipse } from '@/components/UI/RadialEllipse';

import { styles } from './styles';
import { GradientEllipsesBgProps } from './types';

export const GradientEllipsesBg = ({
  leftEllipsisSize,
  leftEllipsisStyle,
  leftGradientStops,
  rightEllipsisSize,
  rightEllipsisStyle,
  rightGradientStops,
}: GradientEllipsesBgProps) => {
  return (
    <>
      <View style={[styles.container, { ...leftEllipsisStyle }]}>
        <RadialEllipse
          width={leftEllipsisSize.width}
          height={leftEllipsisSize.height}
          stops={leftGradientStops}
        />
      </View>
      <View style={[styles.container, { ...rightEllipsisStyle }]}>
        <LinearEllipse
          width={rightEllipsisSize.width}
          height={rightEllipsisSize.height}
          stops={rightGradientStops}
        />
      </View>
    </>
  );
};
