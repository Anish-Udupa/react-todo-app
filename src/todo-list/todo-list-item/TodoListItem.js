import "./TodoListItem.css";
import icon_check from "../../icons/icon-check.svg";
import icon_cross from "../../icons/icon-cross.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../store/TaskReducer";

function TodoListItem({task}) {
    const [ display_cross, setDisplayCross ] = useState(false);
    const dispatch = useDispatch();

    const handleMouseOver = () => {
        setDisplayCross(true);
    }

    const handleMouseOut = () => {
        setDisplayCross(false);
    }

    const handleDeleteItem = () => {
        dispatch(deleteTask({
            task_id: task.id,
        }));
    }

    const handleUpdateItem = () => {
        dispatch(updateTask({
            task_id: task.id,
        }));
    }
    
    return (
        <div className="todo-list-item" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className={task.is_completed ? "icon-circle-filled" : "icon-circle"} onClick={handleUpdateItem}>
                {task.is_completed && <img className="todo-list-item-completed-icon" src={icon_check} alt="completed icon" />}
            </div>
            <p className={task.is_completed ? "todo-list-item-name-completed" : "todo-list-item-name"}>{task.name}</p>
            <img className="todo-list-icon-cross" style={{visibility: display_cross ? "visible" : "hidden"}} src={icon_cross} alt="remove item icon" onClick={handleDeleteItem} />
        </div>
    )
}

export default TodoListItem;