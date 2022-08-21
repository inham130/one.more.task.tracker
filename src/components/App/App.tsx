import { FC, ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './app.module.css'
import { Input } from '@components/Input';
import { Modal } from '@components/Modal';
import { Button } from '@components/Button';
import { Task } from '@customTypes/index';
import { TasksState, add } from '@store/tasks';
import { TaskList } from '@components/TaskList';

export const App: FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDesctiorion] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const tasks:Task[] = useSelector((state:TasksState) => state.tasks);
  const dispatch = useDispatch();

  const handleCreateTask = () => {
    dispatch(add({id: new Date().getTime(),title, description}));
    setTitle('');
    setDesctiorion('');
  }
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDesctiorion(event.target.value);
  }

  return (
    <main className={styles.main}>
      <h1>Hello Tasks</h1>
      <Button onClick={() => setModalVisible(true)}>Create Task</Button>
      <Modal isVisible={isModalVisible} title='Create Task' setVisible={setModalVisible} onSave={handleCreateTask}>
        <form className={styles.form}>
          <Input className={styles.input} onChange={handleTitleChange} value={title} type="text" name="title"/>
          <Input className={styles.input} onChange={handleDescriptionChange} value={description} type="text" name="description"/>
        </form>
      </Modal>
      <TaskList tasks={tasks} />
    </main>
  );
}