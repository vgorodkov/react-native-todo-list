import { View } from 'react-native';

import { TextVariant } from '@/components/UI/Text/types';
import { Text } from '@/components/UI';

import { styles } from './styles';
import { TimeFilterProps } from './types';

export const TimeFilter = ({ title }: TimeFilterProps) => {
  return (
    <View style={styles.timeFilter}>
      <Text variant={TextVariant.label_large}>{title}</Text>
    </View>
  );
};
