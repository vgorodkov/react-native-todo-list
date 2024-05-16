import { TodoTask } from '@/types/todo';
import { uuid } from '@/utils/uuid';

const todosWithoutID = [
  {
    title: 'Complete Math Homework',
    description: 'Finish all exercises from Chapter 5',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Exercise 5.1', isDone: false },
      { id: '2', title: 'Exercise 5.2', isDone: false },
    ],
  },
  {
    title: 'Prepare for History Exam',
    description: 'Study chapters 10 to 12 for the upcoming exam',
    isDone: true,
    isImportant: true,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Review Chapter 10', isDone: true },
      { id: '2', title: 'Review Chapter 11', isDone: true },
      { id: '3', title: 'Review Chapter 12', isDone: true },
    ],
  },
  {
    title: 'Science Project',
    description: 'Complete the volcano eruption project',
    isDone: true,
    isImportant: true,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Gather materials', isDone: true },
      { id: '2', title: 'Assemble the volcano', isDone: true },
      { id: '3', title: 'Test the eruption', isDone: true },
    ],
  },
  {
    title: 'Read Literature Book',
    description: 'Read the assigned book for literature class',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Read Chapter 1', isDone: false },
      { id: '2', title: 'Read Chapter 2', isDone: false },
    ],
  },
  {
    title: 'Write Essay on Environmental Issues',
    description: 'Write a 1000-word essay on current environmental issues',
    isDone: true,
    isImportant: true,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Research topics', isDone: true },
      { id: '2', title: 'Draft the essay', isDone: true },
      { id: '3', title: 'Proofread and finalize', isDone: true },
    ],
  },
  {
    title: 'Art Assignment',
    description: 'Complete the landscape painting assignment',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Sketch the landscape', isDone: false },
      { id: '2', title: 'Paint the landscape', isDone: false },
    ],
  },
  {
    title: 'Biology Lab Report',
    description: 'Write and submit the lab report for the biology experiment',
    isDone: true,
    isImportant: true,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Conduct the experiment', isDone: true },
      { id: '2', title: 'Write the report', isDone: true },
    ],
  },
  {
    title: 'Geography Presentation',
    description: 'Prepare and present the project on global warming',
    isDone: true,
    isImportant: true,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Prepare slides', isDone: true },
      { id: '2', title: 'Practice presentation', isDone: true },
    ],
  },
  {
    title: 'Complete English Assignment',
    description: 'Write a summary of the assigned novel',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Read the novel', isDone: false },
      { id: '2', title: 'Write the summary', isDone: false },
    ],
  },
  {
    title: 'Chemistry Homework',
    description: 'Complete the questions from Chapter 3',
    isDone: false,
    isImportant: false,
    category: 'School',
    toDateTimestamp: 1,
    subtasks: [
      { id: '1', title: 'Question 3.1', isDone: false },
      { id: '2', title: 'Question 3.2', isDone: false },
    ],
  },
];

export const todos: TodoTask[] = todosWithoutID.map((item) => {
  return {
    ...item,
    id: uuid(),
  };
});
