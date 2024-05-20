import { useFocusEffect } from '@react-navigation/native';
import React, { useRef } from 'react';
import { ScrollView } from 'react-native';

import {
  BasicInformationStep,
  ControlBtns,
  DateStep,
  SubtasksStep,
  TimerangeStep,
} from '@/components/AddTaskModal';
import { Header } from '@/components/AddTaskModal/Header';
import { Modal } from '@/components/UI/Modal';
import { useAppDispatch } from '@/store/hooks';
import { setCategory } from '@/store/slices/taskModalSlice';

import { TaskModalProps } from './types';

const MODAL_WIDTH = 320;
const MODAL_HEIGHT = 350;

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
