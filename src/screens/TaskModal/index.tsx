import { useFocusEffect } from '@react-navigation/native';
import React, { useRef } from 'react';
import { ScrollView } from 'react-native';

import {
  BasicInformationStep,
  ControlBtns,
  DateStep,
  Header,
  SubtasksStep,
  TimerangeStep,
} from '@/components/TaskModal';
import { Modal } from '@/components/UI/Modal';
import { useAppDispatch } from '@/store/hooks';
import { setCategory } from '@/store/slices/taskModalSlice';

import { MODAL_HEIGHT, MODAL_WIDTH } from './constants';
import { TaskModalProps } from './types';

export const TaskModal = ({ route }: TaskModalProps) => {
  const { category, id } = route.params;

  const dispatch = useAppDispatch();

  const scrollViewRef = useRef<ScrollView>(null);

  useFocusEffect(() => {
    if (category) {
      dispatch(setCategory(category));
    }
  });

  return (
    <Modal style={{ height: MODAL_HEIGHT, width: MODAL_WIDTH }}>
      <Header />
      <ScrollView
        scrollEnabled={false}
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <BasicInformationStep />
        <SubtasksStep />
        <DateStep />
        <TimerangeStep />
      </ScrollView>
      <ControlBtns id={id} scrollViewRef={scrollViewRef} />
    </Modal>
  );
};
