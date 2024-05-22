import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { View } from 'react-native';

import { commonStyles } from '@/commonStyles';
import { AddIcon } from '@/components/AddIcon';
import { FormContext } from '@/components/TaskModal/types';
import { Input } from '@/components/UI';
import { useAppDispatch } from '@/store/hooks';
import { addSubtask } from '@/store/slices/taskModalSlice';
import { TodoSubtaskDTO } from '@/types/todo';

import { styles } from './styles';

export const SubtaskInput = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    control,
  } = useFormContext<FormContext>();

  const subtaskInput = useWatch({ control, name: 'subtask' });

  const hadleSubtaskTextInputChange = (text: string) => {
    setValue('subtask', text);
  };

  const handleSubtaskAdd = handleSubmit((data) => {
    const { subtask } = data;

    if (subtask.length > 0) {
      const newSubtask: TodoSubtaskDTO = {
        isDone: false,
        title: subtask,
      };
      dispatch(addSubtask(newSubtask));
      setValue('subtask', '');
    }
  });
  return (
    <View style={styles.inputContainer}>
      <View style={commonStyles.fullSize}>
        <Input
          {...register('subtask')}
          value={subtaskInput}
          onSubmitEditing={handleSubtaskAdd}
          onChangeText={hadleSubtaskTextInputChange}
          placeholder="Subtask title"
          errorMessage={errors.subtask?.message}
        />
      </View>
      <AddIcon style={styles.addIcon} size={24} onAddIconPress={handleSubtaskAdd} />
    </View>
  );
};
