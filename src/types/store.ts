import { Task } from '@/types';

export type TasksState = Array<Task>;

export type ModalState = {
  type: Nullable<string>,
  modalProps: Nullable<Record<string, unknown>>
}

export type Store = {
  tasks: TasksState;
  modal: ModalState;
}