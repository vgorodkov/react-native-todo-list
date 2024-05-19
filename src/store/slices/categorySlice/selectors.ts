import { RootState } from '@/store/types';

export const selectCategories = (state: RootState) => state.category.categories;
