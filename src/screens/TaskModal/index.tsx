import React, { useEffect } from 'react';

import { TaskModalHeader } from '@/components/TaskModalHeader';
import { Modal } from '@/components/UI/Modal';
import { MODAL_HEIGHT, MODAL_WIDTH } from '@/constants/task';
import { TaskForm } from '@/forms/TaskForm/TaskForm';
import { useAppDispatch } from '@/store/hooks';
import { setInitialState } from '@/store/slices/taskModalSlice';

import { TaskModalProps } from './types';

export const TaskModal = ({ route, navigation }: TaskModalProps) => {
  const { task, initialStep, category } = route.params;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (task) {
      const { toDateTimestamp, isDone, isImportant, subtasks } = task;
      dispatch(setInitialState({ toDateTimestamp, isDone, isImportant, subtasks }));
    }
  }, [task, dispatch]);

  const closeModal = () => {
    navigation.goBack();
  };

  return (
    <Modal
      onBackdropPress={closeModal}
      style={{ height: MODAL_HEIGHT, width: MODAL_WIDTH }}
      testID="TaskModal"
    >
      <TaskModalHeader title={task ? 'Edit task' : 'Create task'} />
      <TaskForm task={task} category={category} initialStep={initialStep} />
    </Modal>
  );
};
