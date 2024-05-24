import React from 'react';
import { Image, Pressable } from 'react-native';

import { DEFAULT_SIZE } from './constants';
import { AddIconProps } from './types';

export const Icon = ({ icon, onIconPress, size = DEFAULT_SIZE, ...props }: AddIconProps) => {
  return (
    <Pressable onPress={onIconPress} {...props}>
      <Image style={{ width: size, height: size }} source={icon} />
    </Pressable>
  );
};
