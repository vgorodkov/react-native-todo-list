import { View } from 'react-native';

import { TodoSubtask } from '@/types/todo';

import { Checkbox } from '../UI/CheckBox';
import { Text } from '../UI/Text';
import { TextVariant } from '../UI/Text/types';
import { styles } from './styles';

export const Subtask = ({ title, isDone }: TodoSubtask) => {
  const onCheckboxPress = () => {};
  return (
    <View style={styles.subTask}>
      <Checkbox isDone={isDone} onPress={onCheckboxPress} />
      <Text variant={TextVariant.label_small}>{title}</Text>
    </View>
  );
};
