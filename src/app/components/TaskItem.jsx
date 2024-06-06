const TaskItem = ({task, onToggle, onDelete}) => (
    <li>
    <span
        style={{textDecoration: task.completed ? 'line-through' : 'none'}}
        onClick={onToggle}
    >
      {task.text}
    </span>
        <button onClick={onDelete}>Delete</button>
    </li>
);

export default TaskItem;
