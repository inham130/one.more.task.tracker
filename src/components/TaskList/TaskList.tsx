import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from '../Card';
import { Task } from '@customTypes/index';
import { remove } from '@store/tasks';
import styles from './taskList.module.css';

type OwnProps = {
  tasks: Task[];
}

export const TaskList: FC<OwnProps> = ({tasks = []}) => {
  const dispatch = useDispatch();

  const handleEdit = useCallback(() => {
    console.log('handleEdit')
  }, []);

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