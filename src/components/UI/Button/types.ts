import { PressableProps } from 'react-native';

export interface ButtonProps extends PressableProps {
  children: string;
  variant?: 'solid' | 'text';
}
