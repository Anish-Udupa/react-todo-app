import "./TodoList.css";
import icon_sun from "../icons/icon-sun.svg";
import icon_moon from "../icons/icon-moon.svg";
import TodoInput from "./todo-input/TodoInput";

function TodoList() {
    return (
        <div id="todo-list-container">
            <div id="todo-list-header">
                <p>TODO</p>
                <img src={icon_sun} alt="dark mode toggle" />
            </div>
            <TodoInput />
        </div>
    )
}

export default TodoList;