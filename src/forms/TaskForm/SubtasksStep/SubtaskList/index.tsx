import React from 'react';
import { FlatList, View } from 'react-native';

import { commonStyles } from '@/commonStyles';
import { EmptyList } from '@/components/EmptyList';
import { useAppSelector } from '@/store/hooks';
import { selectTaskModalSubtasks } from '@/store/slices/taskModalSlice/selectors';

import { renderSelectedSubtasks } from './renderSubtasks';
import { styles } from './styles';

export const SubtaskList = () => {
  const selectedSubtasks = useAppSelector(selectTaskModalSubtasks);

  return (
    <View style={commonStyles.fullSize}>
      <FlatList
        testID="TaskModal.SubtaskStep.SubtasksList"
        data={selectedSubtasks}
        renderItem={renderSelectedSubtasks}
        contentContainerStyle={styles.listContentContainerStyle}
        ListEmptyComponent={<EmptyList message="No subtasks yet" />}
      />
    </View>
  );
};
