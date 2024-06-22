import { useFormContext, useWatch } from 'react-hook-form';

import { Input } from '@/components/UI';
import { ListItem } from '@/forms/TaskForm/ListItem';

import { FormContext } from '../types';
import { styles } from './styles';

export const BasicInformationStep = () => {
  const {
    register,
    setValue,
    formState: { errors },
    control,
  } = useFormContext<FormContext>();

  const title = useWatch({ control, name: 'title' });
  const description = useWatch({ control, name: 'description' });

  const handleTitleChange = (text: string) => {
    setValue('title', text);
  };
  const handleDescriptionChange = (text: string) => {
    setValue('description', text);
  };

  return (
    <ListItem style={styles.container}>
      <Input
        testID="TaskModal.BasicStep.TitleInput"
        {...register('title')}
        value={title}
        onChangeText={handleTitleChange}
        placeholder="Task title"
        errorMessage={errors.title?.message}
      />
      <Input
        testID="TaskModal.BasicStep.DescriptionInput"
        {...register('description')}
        value={description}
        onChangeText={handleDescriptionChange}
        placeholder="Task description"
        errorMessage={errors.description?.message}
      />
    </ListItem>
  );
};
