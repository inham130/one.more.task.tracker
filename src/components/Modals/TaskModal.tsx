import { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@components/Input';
import { Modal } from '@components/Modal';
import { add, edit } from '@store/Tasks';
import { hide } from '@store/Modal';
import { Store } from '@/types';

export const TaskModal = () => {
  let isVisible = false;
  let initialtitle = '';
  let initialDescription = '';
  let taskId: number | null = null;
  const dispatch = useDispatch();
  const modalState = useSelector((state: Store) => state.modal);
  const modalProps = modalState.modalProps;

  if (modalState.type === 'task') {
   isVisible = true;
  }
  if (modalProps !== null) {
    initialtitle = modalProps.title as string;
    initialDescription = modalProps.description  as string;
    taskId = modalProps.id as number;
  }

  const [title, setTitle] = useState(initialtitle);
  const [description, setDesctiorion] = useState(initialDescription);

  const handleSabeTask = () => {
    if (taskId) {
      dispatch(edit({id: taskId, title, description}));
    } else {
      dispatch(add({id: new Date().getTime(), title, description}));
    }
    dispatch(hide());
    setTitle('');
    setDesctiorion('');
  }
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDesctiorion(event.target.value);
  }

  const handleSetVisible = useCallback(() => dispatch(hide()), []);

  return (
    <>
      <Modal isVisible={isVisible} setVisible={handleSetVisible} title='Create Task' onSave={handleSabeTask}>
        <form>
          <Input onChange={handleTitleChange} value={title} type="text" name="title"/>
          <Input onChange={handleDescriptionChange} value={description} type="text" name="description"/>
        </form>
      </Modal>
    </>
  );
};