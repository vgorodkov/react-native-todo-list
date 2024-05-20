export type MainStackParamList = {
  Onboarding: undefined;
  Drawer: undefined;
  CategoryTasks: {
    category: string;
  };
  AddCategoryModal: undefined;
  TaskModal: {
    category?: string;
    id?: string;
  };
  ByTitleTasks: {
    taskQuery: string;
  };
};
