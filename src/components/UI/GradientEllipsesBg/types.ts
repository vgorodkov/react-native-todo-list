import { ViewStyle } from 'react-native';

import { GradientStop } from '@/types/gradient';

interface EllipsisSize {
  width: number;
  height: number;
}

export interface GradientEllipsesBgProps {
  leftEllipsisSize: EllipsisSize;
  rightEllipsisSize: EllipsisSize;
  leftEllipsisStyle: ViewStyle;
  rightEllipsisStyle: ViewStyle;
  leftGradientStops: GradientStop[];
  rightGradientStops: GradientStop[];
}
