import { expect } from 'detox';

import { getById, getByText } from './utils/getBy';
import { navigateToTasksByCategory } from './utils/navigateTo';
import {
  goToNextStep,
  handleBasicInformationStep,
  handleSubtasksStep,
  openTaskMenu,
  openTaskModal,
} from './utils/taskInteraction';

const TASK_TITLE = 'New Task Title';
const TASK_DESCRIPTION = 'New Task Description';
const FIRST_SUBTASK = 'New Subtask';
const SECOND_SUBTASK = 'Second Subtask';
const EDIT_TITLE = 'Edited title';
const EDIT_DESCRIPTION = 'Edited description';
const NEW_SUBTASK = 'Another subtask';

describe('Should be able to interact with task correctly', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
    await navigateToTasksByCategory('School');
  });

  it('should correctly add valid task', async () => {
    await openTaskModal();
    await goToNextStep(1);
    await expect(getByText('Title is required')).toBeVisible();
    await expect(getByText('Description is required')).toBeVisible();
    await handleBasicInformationStep(TASK_TITLE, TASK_DESCRIPTION);
    await goToNextStep(1);

    await handleSubtasksStep([FIRST_SUBTASK, SECOND_SUBTASK]);
    await goToNextStep(3);
    const task = getById(`Task.${TASK_TITLE}`);
    await expect(task).toBeVisible();
  });

  it('should correctly edit task', async () => {
    await openTaskMenu(TASK_TITLE);
    await getByText('edit task').tap();
    await handleBasicInformationStep(EDIT_TITLE, EDIT_DESCRIPTION, true);
    await goToNextStep(1);
    await handleSubtasksStep([NEW_SUBTASK]);
    await goToNextStep(3);
    const task = getById(`Task.${EDIT_TITLE}`);
    await expect(task).toBeVisible();
  });

  it('should correctly add subtasks', async () => {
    await openTaskMenu(EDIT_TITLE);
    await getByText('add subtasks').tap();
    await handleSubtasksStep(['Added subtask']);
    await goToNextStep(3);
    const expandSubtasksBtn = getById(`Task.${EDIT_TITLE}.ExpandBtn`);
    await expandSubtasksBtn.tap();
    await expect(getByText('Added subtask')).toBeVisible();
  });

  it('should correctly toggle checkbox', async () => {
    const task = getById(`Task.${EDIT_TITLE}`);
    await expect(task).toBeVisible();
    const taskCheckbox = getById(`Task.${EDIT_TITLE}.Checkbox`);
    await taskCheckbox.tap();
    await expect(task).not.toBeVisible();
    const doneTasksToggle = getById('TaskList.DoneTaskToggle');
    await doneTasksToggle.tap();
    await expect(task).toBeVisible();
    await taskCheckbox.tap();
  });

  it('should correctly delete task', async () => {
    await openTaskMenu(EDIT_TITLE);
    await getByText('delete task').tap();

    await expect(getByText(EDIT_TITLE)).not.toExist();
  });
});
