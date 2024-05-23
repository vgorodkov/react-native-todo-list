import { expect } from 'detox';

import { getByText } from './utils/getBy';
import { addMockTask } from './utils/taskInteraction';

const TITLE = 'TaskForSearch';

const searchTask = async (query: string) => {
  const searchBar = element(by.id('Main.Searchbar'));
  await expect(searchBar).toBeVisible();
  await searchBar.typeText(query);
  await searchBar.tapReturnKey();
};

describe('Task By Search', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show EmptyList for not existing tasks', async () => {
    const startBtn = element(by.id('Onboarding.StartBtn'));
    const emptyList = element(by.id('EmptyList'));
    await startBtn.tap();
    await searchTask(TITLE);
    await expect(emptyList).toBeVisible();
  });
  it('should show task for task query', async () => {
    await addMockTask('School', TITLE);
    await device.pressBack();
    await searchTask(TITLE);
    await expect(getByText(TITLE)).toBeVisible;
  });
});
