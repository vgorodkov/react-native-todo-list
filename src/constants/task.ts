import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

import {
  BasicInformationStep,
  DateStep,
  SubtasksStep,
  TimerangeStep,
} from '@/components/TaskModal';

export const MODAL_HEIGHT = height * 0.4;
export const MODAL_WIDTH = width * 0.8;

export const taskModalSteps = [
  {
    id: 1,
    Component: BasicInformationStep,
  },
  {
    id: 2,
    Component: SubtasksStep,
  },
  {
    id: 3,
    Component: DateStep,
  },
  {
    id: 4,
    Component: TimerangeStep,
  },
];

export const MODAL_STEPS = taskModalSteps.length;
