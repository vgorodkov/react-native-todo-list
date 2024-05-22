import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

import { commonStyles } from '@/commonStyles';
import { useAppDispatch } from '@/store/hooks';
import { handleDateSelection } from '@/store/slices/taskModalSlice';

import { ListItem } from '../ListItem';

export const DateStep = () => {
  const dispatch = useAppDispatch();

  const [date, setDate] = useState(new Date());

  const onDateChange = (changedDate: Date) => {
    const timestamp = changedDate.getTime();
    dispatch(handleDateSelection(timestamp));
    setDate(changedDate);
  };

  return (
    <ListItem style={commonStyles.centeredView}>
      <DatePicker mode="date" date={date} onDateChange={onDateChange} />
    </ListItem>
  );
};
