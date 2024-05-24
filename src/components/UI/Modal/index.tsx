import React from 'react';
import { Pressable, StyleSheet, View, ViewProps } from 'react-native';

import { commonStyles } from '@/commonStyles';

import { styles } from './styles';

interface ModalProps extends ViewProps {
  onBackdropPress: () => void;
}

export const Modal = ({ onBackdropPress, children, style, ...props }: ModalProps) => {
  return (
    <View style={commonStyles.fullSizeCentered}>
      <Pressable
        style={[StyleSheet.absoluteFill, styles.modalBackdrop]}
        onPress={onBackdropPress}
      />
      <View style={[styles.modalContent, style]} {...props}>
        {children}
      </View>
    </View>
  );
};
