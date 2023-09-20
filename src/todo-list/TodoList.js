import "./TodoList.css";
import icon_sun from "../icons/icon-sun.svg";
import icon_moon from "../icons/icon-moon.svg";
import TodoInput from "./todo-input/TodoInput";
import { useEffect, useState } from "react";
import TodoListItem from "./todo-list-item/TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCompletedTasks } from "../store/TaskReducer";

function TodoList() {

    const [ dark_mode, setDarkMode ] = useState(true);
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

    const toggleDarkMode = () => {
        if(dark_mode) {
            document.querySelector("body").classList.add("light-mode");
        }
        else {
            document.querySelector("body").classList.remove("light-mode");
        }
        setDarkMode(!dark_mode);
    }

    return (
        <div id="todo-list-container">
            <div id="todo-list-header">
                <p>TODO</p>
                <img src={dark_mode? icon_sun : icon_moon} alt="dark mode toggle" onClick={toggleDarkMode} />
            </div>
            <TodoInput />
            <div id="todo-list-items-container">
                {task_filter === 0 && tasks.map(task => <TodoListItem key={task.id} task={task} />)}
                {task_filter === 1 && (tasks.filter(task => task.is_completed === false)).map(task => <TodoListItem key={task.id} task={task} />)}
                {task_filter === 2 && (tasks.filter(task => task.is_completed === true)).map(task => <TodoListItem key={task.id} task={task} />)}
                <div id="todo-list-items-status-container">
                    <p>{tasks_count} items left</p>
                    <div id="todo-list-items-filter-container">
                        <p className={`todo-list-items-filter ${task_filter === 0 && "todo-list-items-filter-selected"}`} onClick={() => setTaskFilter(0)}>All</p>
                        <p className={`todo-list-items-filter ${task_filter === 1 && "todo-list-items-filter-selected"}`} onClick={() => setTaskFilter(1)}>Active</p>
                        <p className={`todo-list-items-filter ${task_filter === 2 && "todo-list-items-filter-selected"}`} onClick={() => setTaskFilter(2)}>Completed</p>
                    </div>
                    <p className="todo-list-items-filter" onClick={handleClearCompletedTasks}>Clear Completed</p>
                </div>
            </div>
        </div>
    )
}

export default TodoList;