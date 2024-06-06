const TaskItem = ({task, onToggle, onDelete}) => (
    <li className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4">
    <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
      {task.text}
    </span>
        <div>
            <button
                className={`mr-2 px-2 py-1 rounded ${task.completed ? 'bg-green-500' : 'bg-yellow-300'}`}
                onClick={onToggle}
            >
                {task.completed ? 'Completed' : 'Incomplete'}
            </button>
            <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    </li>
);

export default TaskItem;
