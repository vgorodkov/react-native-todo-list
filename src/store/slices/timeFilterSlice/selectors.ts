import { RootState } from '@/store/types';

export const selectTimeFilter = (state: RootState) => state.timeFilter.selectedTimefilter;
