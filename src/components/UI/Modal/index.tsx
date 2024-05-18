import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

import { styles } from './styles';

interface ModalProps extends ViewProps {
  children: ReactNode;
}

export const Modal = ({ children, style, ...props }: ModalProps) => {
  return (
    <View style={styles.modalBackdrop}>
      <View style={[styles.modalContent, style]} {...props}>
        {children}
      </View>
    </View>
  );
};
