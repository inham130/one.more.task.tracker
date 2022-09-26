import { FC, ChangeEvent, useState } from 'react';
import styles from './tasks.module.css'
import { Input, Card, Modal } from '../../components';


type Task = {
  id: number;
  title: string;
  description: string;
}

export const Tasks: FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDesctiorion] = useState('');
  const [tasks, setTasks] = useState<Array<Task>>([{id: 0, title: 'Title', description: 'Body'}]);
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
      <button onClick={() => setModalVisible(true)}>Create Task</button>
      <Modal isVisible={isModalVisible} title='Create Task' setVisible={setModalVisible} onSave={handleCreateTask}>
        <form className={styles.form}>
          <Input className={styles.input} onChange={handleTitleChange} value={title} type="text" name="title"/>
          <Input className={styles.input} onChange={handleDescriptionChange} value={description} type="text" name="description"/>
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