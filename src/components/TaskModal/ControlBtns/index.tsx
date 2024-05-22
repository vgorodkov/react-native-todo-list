import { useNavigation } from '@react-navigation/native';
import { FieldValues, useFormContext } from 'react-hook-form';
import { Keyboard, View } from 'react-native';

import { Button } from '@/components/UI';
import { MODAL_STEPS } from '@/constants/task';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addTask, editTask } from '@/store/slices/taskSlice';
import { TodoTaskDTO } from '@/types/todo';

import { styles } from './styles';
import { ControllBtnsProps } from './types';

export const ControlBtns = ({
  handleScrollBack,
  handleScrollForward,
  currentStep,
  category,
  id,
}: ControllBtnsProps) => {
  const navigation = useNavigation();

  const { handleSubmit } = useFormContext();

  const dispatch = useAppDispatch();

  const task = useAppSelector((state) => state.taskModal.task);

  const handleTaskSubmit = (data: FieldValues) => {
    const { title, description, timeRange } = data;
    const newTask: TodoTaskDTO = {
      ...task,
      category: category,
      title: title,
      description: description,
      timeRange: {
        from: timeRange.from.toISOString(),
        to: timeRange.to.toISOString(),
      },
    };
    if (id) {
      dispatch(editTask({ id, taskDTO: newTask }));
    } else {
      dispatch(addTask(newTask));
    }
  };

  const onNextBtnPress = handleSubmit((data) => {
    Keyboard.dismiss();
    if (currentStep < MODAL_STEPS - 1) {
      handleScrollForward();
    } else {
      handleTaskSubmit(data);
      navigation.goBack();
    }
  });

  const onBackBtnPress = () => {
    Keyboard.dismiss();

    if (currentStep > 0) {
      handleScrollBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.controlBtns}>
      <Button onPress={onBackBtnPress} variant="text">
        {currentStep === 0 ? 'Close' : 'Back'}
      </Button>
      <Button onPress={onNextBtnPress} variant="text">
        {currentStep === MODAL_STEPS - 1 ? 'Submit' : 'Next'}
      </Button>
    </View>
  );
};
