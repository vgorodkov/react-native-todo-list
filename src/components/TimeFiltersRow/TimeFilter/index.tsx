import { View } from 'react-native';

import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';

import { styles } from './styles';
import { TimeFilterProps } from './types';

export const TimeFilter = ({ title }: TimeFilterProps) => {
  return (
    <View style={styles.timeFilter}>
      <Text variant={TextVariant.label_large}>{title}</Text>
    </View>
  );
};
