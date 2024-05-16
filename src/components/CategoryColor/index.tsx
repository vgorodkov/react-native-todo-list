import React from 'react';
import { Pressable } from 'react-native';
import Animated, { useDerivedValue, withSpring } from 'react-native-reanimated';

import { styles } from './styles';

export const CategoryColor = ({
  color,
  isSelected,
  selectColor,
}: {
  color: string;
  isSelected: boolean;
  selectColor: (color: string) => void;
}) => {
  const colorScale = useDerivedValue(() => {
    if (isSelected) {
      return withSpring(1.2);
    }
    return withSpring(1);
  }, [isSelected]);

  const opacity = useDerivedValue(() => {
    if (isSelected) {
      return 1;
    }
    return 0.8;
  }, [isSelected]);

  return (
    <Pressable onPress={() => selectColor(color)}>
      <Animated.View
        style={[
          styles.color,
          { opacity: opacity, transform: [{ scale: colorScale }], backgroundColor: color },
        ]}
      />
    </Pressable>
  );
};
