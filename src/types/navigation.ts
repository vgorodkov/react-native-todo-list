import { TimeFilter } from './timefilter';

export type MainStackParamList = {
  Onboarding: undefined;
  Drawer: undefined;
  CategoryTasks: {
    category: string;
    timeFilter: TimeFilter;
  };
  AddCategoryModal: undefined;
  TaskModal: {
    category?: string;
    id?: string;
  };
  ByTitleTasks: {
    taskQuery: string;
    timeFilter: TimeFilter;
  };
};
