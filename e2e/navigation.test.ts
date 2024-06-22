import { expect } from 'detox';

import { getById, getByText } from './utils/getBy';
import { navigateToMainScreen } from './utils/navigateTo';

const openDrawerAndNavigate = async (drawerSreenName: string) => {
  const headerOpenBtn = getById('Drawer.HeaderOpenBtn');
  const drawerScreenBtn = getByText(drawerSreenName);
  const taskList = getById('TaskList');

  await headerOpenBtn.tap();
  await drawerScreenBtn.tap();
  await expect(taskList).toBeVisible();
  await device.pressBack();
};

describe('Navigation module', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should navigate via Drawer', async () => {
    await navigateToMainScreen();
    const DrawerGroupScreenOptionsProps = ['DailyTasks', 'DoneTasks', 'ImportantTasks'];

    for (const task of DrawerGroupScreenOptionsProps) {
      await openDrawerAndNavigate(task);
    }
  });
});
