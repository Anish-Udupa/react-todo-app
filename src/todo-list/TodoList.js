import "./TodoList.css";
import icon_sun from "../icons/icon-sun.svg";
import icon_moon from "../icons/icon-moon.svg";
import TodoInput from "./todo-input/TodoInput";
import { useEffect, useState } from "react";
import TodoListItem from "./todo-list-item/TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCompletedTasks } from "../store/TaskReducer";

function TodoList() {
    const [ new_task, setNewTask ] = useState(null);
    const [ current_tasks, setCurrentTasks ] = useState([]);

    const tasks = useSelector(state => state.task.tasks);
    const [ tasks_count, setTaskCount ] = useState(0);
    const [ task_filter, setTaskFilter ] = useState(0);  // 0 - all, 1 - active, 2 - completed  
    const dispatch = useDispatch();

    useEffect(() => {
        setTaskCount((tasks.filter(task => task.is_completed === false)).length)
    }, [tasks])

    const handleClearCompletedTasks = () => {
        dispatch(deleteAllCompletedTasks());
    }

    return (
        <div id="todo-list-container">
            <div id="todo-list-header">
                <p>TODO</p>
                <img src={icon_sun} alt="dark mode toggle" />
            </div>
            <TodoInput />
            <div id="todo-list-items-container">
                {task_filter === 0 && tasks.map(task => <TodoListItem key={task.id} task={task} />)}
                {task_filter === 1 && (tasks.filter(task => task.is_completed === false)).map(task => <TodoListItem key={task.id} task={task} />)}
                {task_filter === 2 && (tasks.filter(task => task.is_completed === true)).map(task => <TodoListItem key={task.id} task={task} />)}
                <div id="todo-list-items-status-container">
                    <p>{tasks_count} items left</p>
                    <div id="todo-list-items-filter-container">
                        <p onClick={() => setTaskFilter(0)}>All</p>
                        <p onClick={() => setTaskFilter(1)}>Active</p>
                        <p onClick={() => setTaskFilter(2)}>Completed</p>
                    </div>
                    <p onClick={handleClearCompletedTasks}>Clear Completed</p>
                </div>
            </div>
        </div>
    )
}

export default TodoList;