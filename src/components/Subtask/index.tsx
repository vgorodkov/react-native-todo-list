import Animated, { FadeIn } from 'react-native-reanimated';

import { Checkbox, Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { useAppDispatch } from '@/store/hooks';
import { setSubtaskIsDone, setSubtaskIsUndone } from '@/store/slices/taskSlice';

import { styles } from './styles';
import { SubtaskProps } from './types';

export const Subtask = ({ title, isDone, id, taskId, index }: SubtaskProps) => {
  const dispatch = useAppDispatch();

  const onCheckboxPress = () => {
    if (isDone) {
      dispatch(setSubtaskIsUndone({ taskId, subtaskId: id }));
    } else {
      dispatch(setSubtaskIsDone({ taskId, subtaskId: id }));
    }
  };

  return (
    <Animated.View style={styles.subTask} entering={FadeIn.delay(150 * index)}>
      <Checkbox isDone={isDone} onPress={onCheckboxPress} />
      <Text color={colors.primaryText} variant={TextVariant.LABEL_SMALL}>
        {title}
      </Text>
    </Animated.View>
  );
};
