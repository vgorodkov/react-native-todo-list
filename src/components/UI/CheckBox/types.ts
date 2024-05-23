import { PressableProps } from 'react-native';

export interface CheckBoxProps extends PressableProps {
  isDone: boolean;
  onPress: () => void;
}
