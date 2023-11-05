import Lista from '../assets/list.png';

import { Check, ClipboardText, Trash } from 'phosphor-react';
 
import { TaskTypes } from './TaskSubmit';

import styles from './ListTask.module.css';

type TaskSubmitProps = {
    tasks: TaskTypes[];
    setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
};

export function ListaTask({ tasks, setTasks}: TaskSubmitProps) {

    function handleTaskComplete(id: string) {
        setTasks(
            tasks.map(function (task) {
                if (task.id === id) {
                task.isComplete = !task.isComplete;
                }
                return task;
            })
        );
    }
    function handleTaskDelete(id: string) {
        setTasks(
            tasks.filter(function (task) {
            return task.id !== id;
            })
        );
    }

    let taskCount = tasks.length;
    let taskCompleteCount = tasks.filter(function (task) {
    return task.isComplete;
    }).length;

    return(
        <>
        <div className={styles.stats}>
            <p>
            Tarefas criadas <span>{taskCount}</span>
            </p>
            <p>
            Concluídas{" "}
            {taskCount > 0 ? (
                <span>
                {taskCompleteCount} de {taskCount}
                </span>
            ) : (
                <span>{taskCount}</span>
            )}
            </p>
        </div>
        {taskCount > 0 ? (
            <ul className={styles.list}>
                {tasks.map((task) => (
                <li key={task.id} className={styles.task}>
                    <div>
                        <button
                            onClick={() => handleTaskComplete(task.id)}
                            className={
                            task.isComplete ? styles.btnComplete : styles.btnIncomplete
                            }
                        >
                            <Check weight="bold" />
                        </button>
                    </div>
                    <div>
                        <span
                            className={
                            task.isComplete ? styles.taskComplete : styles.taskIncomplete
                            }
                        >
                            {task.title}
                        </span>
                    </div>
                    <button
                        onClick={() => handleTaskDelete(task.id)}
                        className={styles.btnDelete}
                    >
                        <Trash weight="light" />
                    </button>
                </li>
                ))}
            </ul>
        ) : (
            <div className={styles.emptyList}>
                <ClipboardText weight="light" />
                <p>
                    <strong>Você ainda não tem tarefas cadastradas</strong> <br />
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        )}
        </>
    )
}