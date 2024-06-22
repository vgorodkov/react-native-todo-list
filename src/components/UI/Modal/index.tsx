import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { commonStyles } from '@/commonStyles';

import { styles } from './styles';
import { ModalProps } from './types';

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
