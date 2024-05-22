import { TimeFilter } from './timefilter';
import { TodoTask } from './todo';

export type MainStackParamList = {
  Onboarding: undefined;
  Drawer: undefined;
  CategoryTasks: {
    category: string;
    timeFilter: TimeFilter;
  };
  AddCategoryModal: undefined;
  TaskModal: {
    category: string;
    task?: TodoTask;
    initialStep?: number;
  };
  ByTitleTasks: {
    taskQuery: string;
    timeFilter: TimeFilter;
  };
};
