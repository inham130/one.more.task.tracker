import { FC } from 'react';
import { Card } from '../Card';
import { Task } from '@customTypes/index';
import styles from './taskList.module.css';

type OwnProps = {
  tasks: Task[];
}

export const TaskList: FC<OwnProps> = ({tasks = []}) => {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <Card key={String(task.id)} title={task.title} body={task.description} />
      ))}
    </div>

  );
};