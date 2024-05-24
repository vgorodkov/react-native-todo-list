import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Header } from '@/components/TaskModal';
import { StepList } from '@/components/TaskModal/StepList';
import { Modal } from '@/components/UI/Modal';
import { MODAL_HEIGHT, MODAL_WIDTH, taskModalSteps } from '@/constants/task';
import { useAppDispatch } from '@/store/hooks';
import { setInitialState } from '@/store/slices/taskModalSlice';

import { TaskModalProps } from './types';
import { validationSchema } from './validationSchema';

export const TaskModal = ({ route, navigation }: TaskModalProps) => {
  const { task, initialStep, category } = route.params;

  const dispatch = useAppDispatch();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: task?.title ?? '',
      description: task?.description ?? '',
      subtask: '',
      timeRange: {
        from: new Date(task?.timeRange.from ?? Date.now()),
        to: new Date(task?.timeRange.to ?? Date.now()),
      },
    },
  });

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
      <Header title={task ? 'Edit task' : 'Create task'} />
      <FormProvider {...methods}>
        <StepList initialStep={initialStep} category={category} task={task}>
          {taskModalSteps.map((step) => {
            const { Component, id } = step;
            return <Component key={id} />;
          })}
        </StepList>
      </FormProvider>
    </Modal>
  );
};
