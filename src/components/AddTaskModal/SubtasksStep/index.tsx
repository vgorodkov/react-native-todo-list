import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { AddIcon } from '@/components/AddIcon';
import { Input, Text } from '@/components/UI';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addSubtask } from '@/store/slices/taskModalSlice';

import { ListItem } from '../ListItem';
import { renderSelectedSubtasks } from './renderSubtasks';
import { styles } from './styles';

export const SubtasksStep = () => {
  const [subtaskInputValue, setSubtaskInputValue] = useState('');

  const dispatch = useAppDispatch();

  const selectedSubtasks = useAppSelector((state) => state.taskModal.subtasks);

  const handleSubtaskAdd = () => {
    dispatch(addSubtask(subtaskInputValue));
    setSubtaskInputValue('');
  };

  return (
    <ListItem style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Input
            onSubmitEditing={handleSubtaskAdd}
            value={subtaskInputValue}
            onChangeText={setSubtaskInputValue}
            placeholder="Subtask title"
          />
        </View>
        <AddIcon size={24} onAddIconPress={handleSubtaskAdd} />
      </View>
      <View style={styles.inputField}>
        <FlatList
          data={selectedSubtasks}
          renderItem={renderSelectedSubtasks}
          contentContainerStyle={styles.listContentContainerStyle}
          ListEmptyComponent={<Text>No subtasks</Text>}
        />
      </View>
    </ListItem>
  );
};
