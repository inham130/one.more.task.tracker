import { createSlice } from '@reduxjs/toolkit';
import { Task } from '@customTypes/index';

type InitialState = {
  tasks: Array<Task>
};
const initialState:InitialState = { tasks: [] }

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(state, action);
    },
    remove: (state, action) => {
      console.log(state, action);
    }
  }
});