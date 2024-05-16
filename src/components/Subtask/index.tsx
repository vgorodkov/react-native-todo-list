import { View } from 'react-native';

import { colors } from '@/constants/colors';
import { useAppDispatch } from '@/store/hooks';
import { toggleSubtaskIsDone } from '@/store/slices/todosSlice';
import { TodoSubtask } from '@/types/todo';

import { Checkbox } from '../UI/CheckBox';
import { Text } from '../UI/Text';
import { TextVariant } from '../UI/Text/types';
import { styles } from './styles';

interface TodoSubtaskProps extends TodoSubtask {
  taskId: string;
}

export const Subtask = ({ title, isDone, id, taskId }: TodoSubtaskProps) => {
  const dispatch = useAppDispatch();
  const onCheckboxPress = () => {
    dispatch(toggleSubtaskIsDone({ taskId, subTaskId: id }));
  };
  return (
    <View style={styles.subTask}>
      <Checkbox isDone={isDone} onPress={onCheckboxPress} />
      <Text color={colors.primaryText} variant={TextVariant.label_small}>
        {title}
      </Text>
    </View>
  );
};
