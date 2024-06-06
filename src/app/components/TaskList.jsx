import TaskItem from './TaskItem';

const TaskList = ({tasks, onToggleTask, onDeleteTask}) => (
    <ul>
        {tasks.map((task, index) => (
            <TaskItem
                key={index}
                task={task}
                onToggle={() => onToggleTask(index)}
                onDelete={() => onDeleteTask(index)}
            />
        ))}
    </ul>
);

export default TaskList;
