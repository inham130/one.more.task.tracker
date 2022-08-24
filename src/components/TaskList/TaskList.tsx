import { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../Card';
import { Store, Task } from '@/types';
import { remove } from '@store/Tasks';
import styles from './taskList.module.css';
import { show } from '@store/Modal';

export const TaskList: FC = () => {
  const dispatch = useDispatch();
  const tasks:Task[] = useSelector((state:Store) => state.tasks);
  const tasksRef = useRef(tasks);
  tasksRef.current = tasks;

  const handleEdit = (id: number) => {
    const taskData = tasksRef.current.find(task => task.id === id);
    dispatch(show({type: 'task', modalProps: taskData}))
  };

  const handleRemove = (id: number) => {
    dispatch(remove({ id }));
  };

  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <Card key={String(task.id)}
              id={task.id}
              title={task.title}
              body={task.description}
              handleEdit={handleEdit}
              handleRemove={handleRemove} />
      ))}
    </div>
  );
};