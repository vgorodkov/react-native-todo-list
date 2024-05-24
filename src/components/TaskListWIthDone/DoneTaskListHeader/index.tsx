import { Image, Pressable } from 'react-native';

import { Text } from '@/components/UI/Text';

import { TextVariant } from '../../UI/Text/types';
import { styles } from './styles';
import { DoneTaskListHeaderProps } from './types';

export const DoneTaskListHeader = ({ onPress, doneTasksAmount }: DoneTaskListHeaderProps) => {
  return (
    <Pressable testID="TaskList.DoneTaskToggle" style={styles.doneTaskListHeader} onPress={onPress}>
      <Text variant={TextVariant.label_large}>done tasks ({doneTasksAmount})</Text>
      <Image style={[styles.arrowDownIcon]} source={require('@/assets/icons/arrow_down.png')} />
    </Pressable>
  );
};
