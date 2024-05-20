import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import * as yup from 'yup';

import { ListItem } from '@/components/TaskModal/ListItem';
import { Input } from '@/components/UI';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { handleTextInfoInput, setNextStepIsAvaible } from '@/store/slices/taskModalSlice';
import { selectDescription, selectTitle } from '@/store/slices/taskModalSlice/selectors';

import { styles } from './styles';

const schema = yup.object().shape({
  title: yup.string().required('Title is required').min(3),
  description: yup.string().required('Description is required').min(5),
});

export const BasicInformationStep = () => {
  const dispatch = useAppDispatch();

  const title = useAppSelector(selectTitle);
  const description = useAppSelector(selectDescription);

  const {
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title,
      description,
    },
  });

  useEffect(() => {
    if (!errors.title && !errors.description) {
      dispatch(setNextStepIsAvaible(true));
    } else {
      dispatch(setNextStepIsAvaible(false));
    }
  }, [dispatch, errors.title, errors.description]);

  const handleTitle = (text: string) => {
    setValue('title', text, { shouldValidate: true });
    dispatch(handleTextInfoInput({ mode: 'title', text }));
  };
  const handleDescription = (text: string) => {
    setValue('description', text, { shouldValidate: true });
    dispatch(handleTextInfoInput({ mode: 'description', text }));
  };

  return (
    <ListItem style={styles.container}>
      <Controller
        control={control}
        name="title"
        render={({ field: { onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <Input
              value={value}
              onChangeText={handleTitle}
              onBlur={onBlur}
              placeholder="Task title"
            />
            {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}
          </View>
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field: { onBlur, value } }) => (
          <View>
            <Input
              value={value}
              onChangeText={handleDescription}
              onBlur={onBlur}
              placeholder="Task description"
            />
            {errors.description && (
              <Text style={styles.errorText}>{errors.description.message}</Text>
            )}
          </View>
        )}
      />
    </ListItem>
  );
};
