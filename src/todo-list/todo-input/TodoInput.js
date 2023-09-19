import "./TodoInput.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/TaskReducer";

function TodoInput() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            const input_data = inputRef.current.value;
            dispatch(addTask({
                task_name: input_data,
            }));
            inputRef.current.value = '';
        }
    }

    return (
        <div id="todo-input-container">
            <div className="icon-circle"></div>
            <input type="text" placeholder="Create a new todo..." ref={inputRef} onKeyDown={handleKeyDown} />
        </div>
    )
}

export default TodoInput;