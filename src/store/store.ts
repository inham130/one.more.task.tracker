import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from '@store/Tasks';
import { modalSlice } from '@store/Modal';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    modal: modalSlice.reducer
  }
});