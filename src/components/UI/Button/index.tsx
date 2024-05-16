import { Pressable } from 'react-native';

import { colors } from '@/constants/colors';

import { Text } from '../Text';
import { TextVariant } from '../Text/types';
import { styles } from './styles';
import { ButtonProps } from './types';

export const Button = ({ children, variant = 'solid', ...props }: ButtonProps) => {
  const { disabled } = props;
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.btn,
        variant === 'solid' ? styles.solidBtn : styles.textBtn,
        pressed && styles.pressedBtn,
        disabled && variant === 'solid' && styles.disabledBtn,
      ]}
    >
      <Text
        variant={TextVariant.label_large}
        color={disabled ? '#727272' : variant === 'solid' ? colors.onPrimary : colors.primary}
      >
        {children}
      </Text>
    </Pressable>
  );
};
