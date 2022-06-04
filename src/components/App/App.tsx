import { FC, MouseEvent, ChangeEvent, useState } from 'react';
import styles from './app.module.css'
import { Input } from "../Input";

type Task = {
  id: number;
  title: string;
  description: string;
}

export const App: FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDesctiorion] = useState('');
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const handleCreateTask = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTasks([...tasks, {id: new Date().getTime(),title, description}]);
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
      <h1 className={styles.h1}>Hello Tasks</h1>

      <form className={styles.form}>
        <Input className={styles.input} onChange={handleTitleChange} value={title} type="text" name="title"/>
        <Input className={styles.input} onChange={handleDescriptionChange} value={description} type="text" name="description"/>
        <button onClick={handleCreateTask}>Create Task</button>
      </form>
      <div className="task-list">
        {tasks.map((task) => (
            <div key={task.id} className="task">
              <div className="task_title">{task.title}</div>
              <div className="task_description">{task.description}</div>
            </div>
        ))}
      </div>
    </main>
  );
}