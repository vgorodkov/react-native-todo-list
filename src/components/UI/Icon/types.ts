import { ViewProps } from 'react-native';

export interface AddIconProps extends ViewProps {
  onIconPress: () => void;
  size?: number;
  icon: number;
}
