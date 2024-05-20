import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';

import { Input } from '../UI/Input';

export const TaskSearchbar = () => {
  const navigation = useNavigation();
  const [taskQuery, setTaskQuery] = useState('');

  const onSubmit = () => {
    navigation.navigate('ByTitleTasks', { taskQuery });
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
