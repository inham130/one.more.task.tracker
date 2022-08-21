import { createSlice } from '@reduxjs/toolkit';
import { Task } from '@customTypes/index';

export type TasksState = {
  tasks: Array<Task>
};
const initialState:TasksState = { tasks: [] }

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      state.tasks = [...state.tasks, action.payload]
    },
    remove: (state, action) => {
      console.log(state, action);
    }
  }
});

export const { add, remove } = tasksSlice.actions;