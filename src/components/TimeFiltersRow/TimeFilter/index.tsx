import { Pressable } from 'react-native';

import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { useAppDispatch } from '@/store/hooks';
import { setTimeFilter } from '@/store/slices/timeFilterSlice';

import { styles } from './styles';
import { TimeFilterProps } from './types';

export const TimeFilter = ({ title, isSelected }: TimeFilterProps) => {
  const dispatch = useAppDispatch();

  const onTimeFilterPress = () => {
    dispatch(setTimeFilter(title));
  };

  return (
    <Pressable
      onPress={onTimeFilterPress}
      style={[styles.timeFilter, isSelected && styles.activeTimeFilter]}
    >
      <Text color={isSelected ? 'white' : colors.primaryText} variant={TextVariant.label_large}>
        {title}
      </Text>
    </Pressable>
  );
};
