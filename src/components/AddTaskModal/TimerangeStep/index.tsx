import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { handleTimeRangeSelection } from '@/store/slices/taskModalSlice';
import { selectTimerange } from '@/store/slices/taskModalSlice/selectors';

import { ListItem } from '../ListItem';
import { TimerangeRow } from './TimerangeRow';

export const TimerangeStep = () => {
  const dispatch = useAppDispatch();
  const timeRange = useAppSelector(selectTimerange);

  const [isOpen, setIsOpen] = useState(false);
  const [timeMode, setTimeMode] = useState<'from' | 'to'>('from');
  const [fromDate, setFromDate] = useState(new Date(timeRange.from));
  const [toDate, setToDate] = useState(new Date(timeRange.to));

  const onDateChange = (date: Date) => {
    if (timeMode === 'from') {
      setFromDate(date);
    } else {
      setToDate(date);
    }
  };

  const onConfirm = (date: Date) => {
    dispatch(handleTimeRangeSelection({ mode: timeMode, value: date.toISOString() }));
    onDateChange(date);
    setIsOpen(false);
  };

  const openDatePicker = (mode: 'from' | 'to') => () => {
    setTimeMode(mode);
    setIsOpen(true);
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <ListItem>
      <TimerangeRow
        label="From:"
        time={fromDate.toTimeString().slice(0, 5)}
        onPress={openDatePicker('from')}
      />
      <TimerangeRow
        label="To:"
        time={toDate.toTimeString().slice(0, 5)}
        onPress={openDatePicker('to')}
      />
      <DatePicker
        modal
        open={isOpen}
        mode="time"
        date={timeMode === 'from' ? fromDate : toDate}
        onDateChange={onDateChange}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </ListItem>
  );
};
