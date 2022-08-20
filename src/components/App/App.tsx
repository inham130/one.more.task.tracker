import { FC, ChangeEvent, useState } from 'react';
import styles from './app.module.css'
import { Input } from '@components/Input';
import { Card } from '@components/Card';
import { Modal } from '@components/Modal';
import { Button } from '@components/Button';
import { Task } from '@customTypes/index';

export const App: FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDesctiorion] = useState('');
  const [tasks, setTasks] = useState<Array<Task>>([{id: 0, title: 'Title', description: 'BOdy'}]);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCreateTask = () => {
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
      <Button onClick={() => setModalVisible(true)}>Create Task</Button>
      <Modal isVisible={isModalVisible} title='Create Task' setVisible={setModalVisible} onSave={handleCreateTask}>
        <form className={styles.form}>
          <Input className={styles.input} onChange={handleTitleChange} value={title} type="text" name="title"/>
          <Input className={styles.input} onChange={handleDescriptionChange} value={description} type="text" name="description"/>
        </form>
      </Modal>
      <div className="task-list" style={{width: '50vw'}}>
        {tasks.map((task) => (
          <Card key={String(task.id)} title={task.title} body={task.description} />
        ))}
      </div>
    </main>
  );
}