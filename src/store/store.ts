import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from '@store/tasks';

export const store = configureStore({
  reducer: tasksSlice.reducer
});