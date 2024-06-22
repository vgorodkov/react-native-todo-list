import { expect } from 'detox';

import { getById } from './utils/getBy';

describe('Task By Search', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should correctly add new category', async () => {
    const NEW_CATEGORY_TITLE = 'New category';
    const addCategoryCard = getById('Main.TaskAddCategory');
    const categoryInput = getById('Main.CategoryInput');
    const categoryAddBtn = getById('Main.CategoryAddBtn');
    const color = element(by.id('Main.CategoryColor1'));
    const category = element(by.id(`Main.TaskCategory${NEW_CATEGORY_TITLE}`));
    const startBtn = element(by.id('Onboarding.StartBtn'));

    await startBtn.tap();
    await addCategoryCard.tap();
    await categoryInput.typeText(NEW_CATEGORY_TITLE);
    await color.tap();
    await categoryAddBtn.tap();
    await expect(category).toBeVisible();
  });
});
