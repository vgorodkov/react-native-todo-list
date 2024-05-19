import { Image, Pressable } from 'react-native';

import { Text } from '@/components/UI/Text';

import { styles } from './styles';
import { DoneTaskListHeaderProps } from './types';

export const DoneTaskListHeader = ({ onPress, doneTasksAmount }: DoneTaskListHeaderProps) => {
  return (
    <Pressable style={styles.doneTaskListHeader} onPress={onPress}>
      <Text>done tasks ({doneTasksAmount})</Text>
      <Image style={[styles.arrowDownIcon]} source={require('@/assets/icons/arrow_down.png')} />
    </Pressable>
  );
};
