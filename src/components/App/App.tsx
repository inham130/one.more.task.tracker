import { FC, MouseEvent, ChangeEvent, useState } from 'react';
import styles from './app.module.css'
import { Input } from '@components/Input';
import { Card } from 'components/Card';
import { Modal } from 'components/Modal';

type Task = {
  id: number;
  title: string;
  description: string;
}

export const App: FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDesctiorion] = useState('');
  const [tasks, setTasks] = useState<Array<Task>>([{id: 0, title: 'Title', description: 'BOdy'}]);
  const [isModalVisible, setModalVisible] = useState(false);

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
      <h1>Hello Tasks</h1>

      <button onClick={() => setModalVisible(true)}>Create Task</button>
      <Modal isVisible={isModalVisible} setVisible={setModalVisible}>
        <form className={styles.form} style={{marginBottom: '16px'}}>
          <Input className={styles.input} onChange={handleTitleChange} value={title} type="text" name="title"/>
          <Input className={styles.input} onChange={handleDescriptionChange} value={description} type="text" name="description"/>
          <button  onClick={handleCreateTask}>Create Task</button>
        </form>
      </Modal>
      <div className="task-list" style={{width: '50vw'}}>
        {tasks.map((task) => (
          <Card key={task.id} title={task.title} body={task.description} />
        ))}
      </div>
    </main>
  );
}