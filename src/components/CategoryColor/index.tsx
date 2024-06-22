import React from 'react';
import { Pressable } from 'react-native';
import Animated, { useDerivedValue, withSpring } from 'react-native-reanimated';

import { styles } from './styles';
import { CategoryColorProps } from './types';

export const CategoryColor = ({ color, isSelected, selectColor, index }: CategoryColorProps) => {
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

  const onCategoryColorPress = () => {
    selectColor(color);
  };

  return (
    <Pressable testID={`Main.CategoryColor${index}`} onPress={onCategoryColorPress}>
      <Animated.View
        style={[
          styles.color,
          { opacity: opacity, transform: [{ scale: colorScale }], backgroundColor: color },
        ]}
      />
    </Pressable>
  );
};
