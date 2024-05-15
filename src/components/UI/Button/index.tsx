import { Pressable } from 'react-native';

import { styles } from './styles';
import { ButtonProps } from './types';

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Pressable {...props} style={({ pressed }) => [styles.btn, pressed && styles.pressedBtn]}>
      {children}
    </Pressable>
  );
};
