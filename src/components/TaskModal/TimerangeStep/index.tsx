import React, { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import DatePicker from 'react-native-date-picker';

import { getTimeFromDate } from '@/utils/getTimeFromDate';

import { ListItem } from '../ListItem';
import { FormContext } from '../types';
import { TimerangeRow } from './TimerangeRow';

export const TimerangeStep = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<FormContext>();

  const fromDate = useWatch({
    control,
    name: 'timeRange.from',
  });
  const toDate = useWatch({
    control,
    name: 'timeRange.to',
  });
  const [isOpen, setIsOpen] = useState(false);
  const [timeMode, setTimeMode] = useState<'from' | 'to'>('from');

  const itFromTimeMode = timeMode === 'from';

  const onDateChange = (date: Date) => {
    if (itFromTimeMode) {
      setValue('timeRange.from', date);
    } else {
      setValue('timeRange.to', date);
    }
  };

  const onConfirm = (date: Date) => {
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
        time={getTimeFromDate(fromDate)}
        onPress={openDatePicker('from')}
        errorText={errors.timeRange?.from?.message}
      />
      <TimerangeRow
        label="To:"
        time={getTimeFromDate(toDate)}
        onPress={openDatePicker('to')}
        errorText={errors.timeRange?.to?.message}
      />
      <DatePicker
        testID="TaskModal.TimerangeStep.TimeInput"
        modal
        open={isOpen}
        mode="time"
        date={itFromTimeMode ? fromDate : toDate}
        onDateChange={onDateChange}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </ListItem>
  );
};
