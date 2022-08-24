import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from '../Card';
import { Task } from '@/types';
import { remove } from '@store/Tasks';
import styles from './taskList.module.css';
import { show } from '@store/Modal';

type OwnProps = {
  tasks: Task[];
}

export const TaskList: FC<OwnProps> = ({tasks = []}) => {
  const dispatch = useDispatch();

  const handleEdit = useCallback((id: number) => {
    const taskData = tasks.find(task => task.id === id);
    dispatch(show({type: 'task', modalProps: taskData}))
  }, [tasks]);

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