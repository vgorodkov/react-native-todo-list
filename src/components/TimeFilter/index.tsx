import { View } from 'react-native';

import { Text } from '@/components/Text';
import { TextVariant } from '@/components/Text/types';

import { styles } from './styles';
import { TimeFilterProps } from './types';

export const TimeFilter = ({ title }: TimeFilterProps) => {
  return (
    <View style={styles.timeFilter}>
      <Text variant={TextVariant.label_large}>{title}</Text>
    </View>
  );
};
