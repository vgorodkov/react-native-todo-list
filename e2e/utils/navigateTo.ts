import { getById } from './getBy';

export const navigateToMainScreen = async () => {
  const startBtn = getById('Onboarding.StartBtn');

  await startBtn.tap();
};

export const navigateToTasksByCategory = async (category: string) => {
  const categoryCard = getById(`Main.TaskCategory${category}`);

  await navigateToMainScreen();
  await categoryCard.tap();
};
