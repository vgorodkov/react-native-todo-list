import React, { memo } from 'react';

import { ListItem } from '../ListItem';
import { styles } from './styles';
import { SubtaskInput } from './SubtaskInput';
import { SubtaskList } from './SubtaskList';

export const SubtasksStep = memo(() => {
  return (
    <ListItem style={styles.container}>
      <SubtaskInput />
      <SubtaskList />
    </ListItem>
  );
});
