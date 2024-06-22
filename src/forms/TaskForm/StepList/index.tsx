import React, { useRef, useState } from 'react';
import { ScrollView } from 'react-native';

import { MODAL_WIDTH } from '@/constants/task';

import { ControlBtns } from '../ControlBtns';
import { StepListProps } from './types';

export const StepList = ({ initialStep, category, task, children }: StepListProps) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentStep, setCurrentStep] = useState(initialStep ?? 0);

  const handleScrollForward = () => {
    setCurrentStep((prev) => prev + 1);
    scrollViewRef.current?.scrollTo({ x: (currentStep + 1) * MODAL_WIDTH });
  };

  const handleScrollBack = () => {
    setCurrentStep((prev) => prev - 1);
    scrollViewRef.current?.scrollTo({ x: (currentStep - 1) * MODAL_WIDTH });
  };

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentOffset={{ x: (initialStep ?? 0) * MODAL_WIDTH, y: 0 }}
        scrollEnabled={false}
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      <ControlBtns
        id={task?.id}
        category={category}
        currentStep={currentStep}
        handleScrollForward={handleScrollForward}
        handleScrollBack={handleScrollBack}
      />
    </>
  );
};
