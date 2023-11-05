import { useState } from 'react';
import { Header } from "./components/Header";  
import { ListaTask } from './components/ListTask';
import { TaskSubmit, TaskTypes} from './components/TaskSubmit';


import './global.css';

import styles from './App.module.css'; 

export function App() {
 
  const [tasks, setTasks] = useState<TaskTypes[]>([]);

  return (
    <div>
        <Header />
        <div className={styles.content}>
            <TaskSubmit tasks={tasks} setTasks={setTasks} />
            <ListaTask tasks={tasks} setTasks={setTasks} />
        </div> 
    </div>
  )
}

