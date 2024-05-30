import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { taskModalSteps } from '@/constants/task';
import { StepList } from '@/forms/TaskForm/StepList';
import { TodoTask } from '@/types/todo';

import { getDefaultValues } from './defaultValues';
import { validationSchema } from './validationSchema';

export interface TaskFormProps {
  task?: TodoTask;
  initialStep?: number;
  category: string;
}

export const TaskForm = ({ task, initialStep, category }: TaskFormProps) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: getDefaultValues(task),
  });
  return (
    <FormProvider {...methods}>
      <StepList initialStep={initialStep} category={category} task={task}>
        {taskModalSteps.map((step) => {
          const { Component, id } = step;
          return <Component key={id} />;
        })}
      </StepList>
    </FormProvider>
  );
};
