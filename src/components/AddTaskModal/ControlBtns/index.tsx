import { useNavigation } from '@react-navigation/native';
import React, { RefObject, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { Button } from '@/components/UI';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectTaskDTO } from '@/store/slices/taskModalSlice/selectors';
import { addTask, editTask } from '@/store/slices/taskSlice';

import { styles } from './styles';

const MODAL_WIDTH = 320;
const ITEMS_AMOUNT = 4;

export const ControlBtns = ({
  scrollViewRef,
  id,
}: {
  scrollViewRef: RefObject<ScrollView>;
  id?: string;
}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const taskDTO = useAppSelector(selectTaskDTO);
  const [scrollViewIndex, setScrollViewIndex] = useState(0);

  const onNextBtnPress = () => {
    if (scrollViewIndex < ITEMS_AMOUNT - 1) {
      setScrollViewIndex((prev) => prev + 1);
      scrollViewRef.current?.scrollTo({ x: (scrollViewIndex + 1) * MODAL_WIDTH });
    } else {
      if (id) {
        dispatch(editTask({ id, taskDTO }));
      } else {
        dispatch(addTask(taskDTO));
      }
      navigation.goBack();
    }
  };

  const onBackBtnPress = () => {
    if (scrollViewIndex > 0) {
      setScrollViewIndex((prev) => prev - 1);
      scrollViewRef.current?.scrollTo({ x: (scrollViewIndex - 1) * MODAL_WIDTH });
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.controlBtns}>
      <Button onPress={onBackBtnPress} variant="text">
        {scrollViewIndex === 0 ? 'Close' : 'Back'}
      </Button>
      <Button onPress={onNextBtnPress} variant="text">
        {scrollViewIndex === ITEMS_AMOUNT - 1 ? 'Submit' : 'Next'}
      </Button>
    </View>
  );
};
