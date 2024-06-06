'use client';
import {useEffect, useState} from 'react';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        console.log('Loading tasks from localStorage');
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            console.log('Stored tasks found:', storedTasks);
            setTasks(storedTasks);
        } else {
            console.log('No stored tasks found');
        }
    }, []);

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            const updatedTasks = [...tasks, {text: newTask, completed: false}];
            setTasks(updatedTasks);
            setNewTask('');
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    };

    const handleToggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? {...task, completed: !task.completed} : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-1 container mx-auto p-4">
                <div className="mb-4">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="p-2 rounded-lg border border-gray-300 mr-2 w-full"
                    />
                    <button
                        onClick={handleAddTask}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-5"
                    >
                        Add Task
                    </button>
                </div>
                <TaskList
                    tasks={tasks}
                    onToggleTask={handleToggleTask}
                    onDeleteTask={handleDeleteTask}
                />
            </main>
            <Footer/>
        </div>
    );
}