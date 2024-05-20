import { TaskState } from '.';

export const toggleTaskIsDone = (state: TaskState, id: string, isDone: boolean) => {
  if (state[id]) {
    state[id].isDone = isDone;
    state[id].subtasks.forEach((subtask) => {
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
  const subtaskToFind = state[taskId].subtasks.find((subtask) => subtask.id === subtaskId);
  if (subtaskToFind) {
    subtaskToFind.isDone = isDone;
  }
  const isAllSubtasksIsDone = state[taskId].subtasks.every((subtask) => subtask.isDone);

  if (isAllSubtasksIsDone) {
    state[taskId].isDone = true;
  } else {
    state[taskId].isDone = false;
  }
};
