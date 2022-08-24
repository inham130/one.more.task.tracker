import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './app.module.css'
import { Button } from '@components/Button';
import { Store, Task } from '@/types';
import { show } from '@store/Modal';
import { TaskList } from '@components/TaskList';
import { ModalManager } from '@components/Modals';

export const App: FC = () => {
  const tasks:Task[] = useSelector((state:Store) => state.tasks);
  const dispatch = useDispatch();

  const handleCreateTask = () => dispatch(show({type: 'task', modalProps: {}}));

  return (
    <>
      <main className={styles.main}>
        <h1>Hello Tasks</h1>
        <Button onClick={handleCreateTask}>Create Task</Button>
        <TaskList tasks={tasks} />
      </main>
      <ModalManager />
    </>
  );
}