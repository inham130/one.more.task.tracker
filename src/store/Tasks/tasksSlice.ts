import { createSlice } from '@reduxjs/toolkit';
import { TasksState } from '@/types';


const initialState:TasksState = [{id: 1, title: '1111', description: '1123'}, {id: 2, title: '2222', description: '1123'}];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add(state, { payload }) {
      state.push(payload);
    },
    remove: (state, { payload }) => state.filter((item) => item.id !== payload.id),
    edit(state, { payload }) {
      const task = state.find(item => item.id === payload.id);
      if (task) {
        task.title = payload.title;
        task.description = payload.description;
      }
      return state;
    }
  }
});

export const { add, remove, edit } = tasksSlice.actions;