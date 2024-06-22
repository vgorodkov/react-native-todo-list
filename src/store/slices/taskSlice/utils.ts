import { TaskState } from '.';

export const toggleTaskIsDone = (state: TaskState, id: string, isDone: boolean) => {
  if (state.entities[id]) {
    state.entities[id].isDone = isDone;
    state.entities[id].subtasks.forEach((subtask) => {
      subtask.isDone = isDone;
    });
  }
};

export const toggleSubtaskIsDone = (
  state: TaskState,
  taskId: string,
  subtaskId: string,
  isDone: boolean
) => {
  const subtaskToFind = state.entities[taskId].subtasks.find((subtask) => subtask.id === subtaskId);
  if (subtaskToFind) {
    subtaskToFind.isDone = isDone;
  }
  const isAllSubtasksIsDone = state.entities[taskId].subtasks.every((subtask) => subtask.isDone);

  if (isAllSubtasksIsDone) {
    state.entities[taskId].isDone = true;
  } else {
    state.entities[taskId].isDone = false;
  }
};
