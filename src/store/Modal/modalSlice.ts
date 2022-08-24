import { createSlice } from '@reduxjs/toolkit';

const initialState = { type: null, modalProps: {} };

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (_state, { payload }) => {
      return { type: payload.type, modalProps: payload.modalProps };
    },
    hide() {
      return { type: null, modalProps: {} };
    }
  }
});

export const { show, hide } = modalSlice.actions;