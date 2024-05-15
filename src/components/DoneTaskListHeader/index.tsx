import { Text } from '../UI/Text';
import { Image, Pressable } from 'react-native';
import { styles } from './styles';

export const DoneTaskListHeader = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable style={styles.doneTaskListHeader} onPress={onPress}>
      <Text>Done tasks</Text>
      <Image style={[styles.arrowDownIcon]} source={require('@/assets/icons/arrow_down.png')} />
    </Pressable>
  );
};
