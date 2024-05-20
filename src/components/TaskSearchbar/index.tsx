import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { useAppSelector } from '@/store/hooks';
import { selectTimeFilter } from '@/store/slices/timeFilterSlice/selectors';

import { Input } from '../UI/Input';

export const TaskSearchbar = () => {
  const navigation = useNavigation();

  const timeFilter = useAppSelector(selectTimeFilter);

  const [taskQuery, setTaskQuery] = useState('');

  const onSubmit = () => {
    navigation.navigate('ByTitleTasks', { taskQuery, timeFilter });
    setTaskQuery('');
  };

  return (
    <View>
      <Input
        onSubmitEditing={onSubmit}
        onChangeText={setTaskQuery}
        value={taskQuery}
        placeholder="Search tasks"
        icon={require('@/assets/icons/search.png')}
      />
    </View>
  );
};
