import { TodoTask } from '@/types/todo';
import { uuid } from '@/utils/uuid';

const todosWithoutID = [
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 3',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: true },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 3',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
  {
    title: 'Todo title 1',
    description: 'Description todo title 1 asdasd',
    isDone: true,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Subtask 1', isDone: false },
      { id: '2', title: 'Subtask 2', isDone: true },
    ],
  },
];

export const todos: TodoTask[] = todosWithoutID.map((item) => {
  return {
    ...item,
    id: uuid(),
  };
});
