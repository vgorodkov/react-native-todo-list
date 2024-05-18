import { Image, Pressable } from 'react-native';

import { Text } from '../UI/Text';
import { styles } from './styles';

export const DoneTaskListHeader = ({
  onPress,
  doneTasksAmount,
}: {
  onPress: () => void;
  doneTasksAmount: number;
}) => {
  return (
    <Pressable style={styles.doneTaskListHeader} onPress={onPress}>
      <Text>done tasks ({doneTasksAmount})</Text>
      <Image style={[styles.arrowDownIcon]} source={require('@/assets/icons/arrow_down.png')} />
    </Pressable>
  );
};
