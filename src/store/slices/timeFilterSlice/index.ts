import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TimeFilter } from '@/types/timefilter';

interface TimeFilterState {
  selectedTimefilter: TimeFilter;
}

const initialState: TimeFilterState = {
  selectedTimefilter: 'Today',
};

export const timeFilterSlice = createSlice({
  name: 'timeFilter',
  initialState,
  reducers: {
    setTimeFilter: (state, action: PayloadAction<TimeFilter>) => {
      state.selectedTimefilter = action.payload;
    },
  },
});

export const { setTimeFilter } = timeFilterSlice.actions;

export default timeFilterSlice.reducer;
