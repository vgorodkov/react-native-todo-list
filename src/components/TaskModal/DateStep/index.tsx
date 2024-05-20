import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

import { useAppDispatch } from '@/store/hooks';
import { handleDateSelection } from '@/store/slices/taskModalSlice';

import { ListItem } from '../ListItem';
import { styles } from './styles';

export const DateStep = () => {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState(new Date());

  const onDateChange = (changedDate: Date) => {
    const timestamp = changedDate.getTime();
    setDate(changedDate);
    dispatch(handleDateSelection(timestamp));
  };

  return (
    <ListItem style={styles.container}>
      <DatePicker mode="date" date={date} onDateChange={onDateChange} />
    </ListItem>
  );
};
