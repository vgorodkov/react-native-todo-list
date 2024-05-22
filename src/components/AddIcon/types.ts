import { ViewProps } from 'react-native';

export interface AddIconProps extends ViewProps {
  onAddIconPress: () => void;
  size?: number;
}
