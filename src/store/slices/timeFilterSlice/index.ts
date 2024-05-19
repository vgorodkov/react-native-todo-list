import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type TimeFilter = 'Today' | 'Week' | 'Month';

interface TimeFilterState {
  selected: TimeFilter;
}

const initialState: TimeFilterState = {
  selected: 'Today',
};

export const timeFilterSlice = createSlice({
  name: 'timeFilter',
  initialState,
  reducers: {
    setTimeFilter: (state, action: PayloadAction<TimeFilter>) => {
      state.selected = action.payload;
    },
  },
});

export const { setTimeFilter } = timeFilterSlice.actions;

export default timeFilterSlice.reducer;
