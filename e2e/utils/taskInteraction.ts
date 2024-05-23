import { expect } from 'detox';

import { getById } from './getBy';
import { navigateToTasksByCategory } from './navigateTo';

export const openTaskModal = async () => {
  const taskAddIcon = element(by.id('Task.AddIcon'));
  const taskModal = element(by.id('TaskModal'));
  await taskAddIcon.tap();
  await expect(taskModal).toBeVisible();
};

export const handleBasicInformationStep = async (
  title: string,
  description: string,
  isEdit: boolean = false
) => {
  const titleInput = getById('TaskModal.BasicStep.TitleInput');
  const descriptionInput = getById('TaskModal.BasicStep.DescriptionInput');

  if (isEdit) {
    await titleInput.clearText();
    await descriptionInput.clearText();
  }

  await titleInput.typeText(title);
  await descriptionInput.typeText(description);
};

export const handleSubtasksStep = async (subtasks: string[]) => {
  const subtasksInput = getById('TaskModal.SubtaskStep.SubtaskInput');
  const subtasksAddIcon = getById('TaskModal.SubtaskStep.SubtaskAddIcon');

  for (const subtask of subtasks) {
    await subtasksInput.typeText(subtask);
    await subtasksAddIcon.tap();
    const createdSubtask = getById(`TaskModal.SubtaskStep.${subtask}`);
    await expect(createdSubtask).toBeVisible();
  }
};

export const goToNextStep = async (times: number) => {
  const nextControlBtn = getById('TaskModal.ControlNextBtn');
  for (let i = 0; i < times; i++) {
    await nextControlBtn.tap();
  }
};

export const openTaskMenu = async (task: string) => {
  const menuBtn = getById(`Task.${task}.MenuBtn`);
  await menuBtn.tap();
};

export const addMockTask = async (category: string, title: string) => {
  await navigateToTasksByCategory(category);
  await openTaskModal();

  await handleBasicInformationStep(title, 'asdasdasdasd');
  await goToNextStep(4);
};
