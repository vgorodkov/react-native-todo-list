import { ViewProps } from 'react-native';

export interface IconProps extends ViewProps {
  onIconPress: () => void;
  size?: number;
  icon: number;
}
