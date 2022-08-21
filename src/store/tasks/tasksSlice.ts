import { createSlice } from '@reduxjs/toolkit';
import { Task } from '@customTypes/index';

export type TasksState = {
  tasks: Array<Task>
};
const initialState:TasksState = { tasks: [{id: 1, title: '1111', description: '1123'}, {id: 2, title: '2222', description: '1123'}] }

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.tasks = [...state.tasks, payload];
    },
    remove: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload.id);
    }
  }
});

export const { add, remove } = tasksSlice.actions;