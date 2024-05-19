import { RootState } from '@/store/types';

export const selectTaskDTO = (state: RootState) => state.taskModal.taskDTO;
export const selectTitle = (state: RootState) => state.taskModal.taskDTO.title;
export const selectDescription = (state: RootState) => state.taskModal.taskDTO.description;
export const selectIsImportant = (state: RootState) => state.taskModal.taskDTO.isImportant;
export const selectSubtasks = (state: RootState) => state.taskModal.taskDTO.subtasks;
export const selectTimerange = (state: RootState) => state.taskModal.taskDTO.timeRange;
