import {useEffect, useState} from 'react';
import {Task} from "./types";
import {getAllTasks, createTask} from './services/taskService';

const App = () => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getAllTasks().then(data => {
            setTasks(data);
        });
    }, []);

    const taskCreation = (event: React.SyntheticEvent) => {
        event.preventDefault();
        createTask({content: newTask})
            .then(data => {
                setTasks(tasks.concat(data));
            });

        setNewTask('');
    };

    return (
        <div>
            <form onSubmit={taskCreation}>
                <input
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                />
                <button type="submit">add</button>
            </form>
            <ul>
                {tasks.map(task =>
                    <li key={task.id}>{task.content}</li>
                )}
            </ul>
        </div>
    );
};

export default App;
