import React from 'react';
import { Image, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';

import { styles } from './styles';
import { CheckBoxProps } from './types';

export const Checkbox = ({ isDone, onPress }: CheckBoxProps) => {
  const checkboxScale = useSharedValue(1);

  const checkboxAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: checkboxScale.value }],
    };
  });

  const toggleCheckbox = () => {
    onPress();
    checkboxScale.value = withSequence(withSpring(1.1), withSpring(1));
  };

  return (
    <Pressable onPress={toggleCheckbox}>
      <Animated.View style={[styles.checkbox, checkboxAnimatedStyle]}>
        {isDone && (
          <Image style={styles.checkboxTickIcon} source={require('@/assets/icons/tick.png')} />
        )}
      </Animated.View>
    </Pressable>
  );
};
