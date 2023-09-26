import { createSlice } from "@reduxjs/toolkit";

// List of predefined tasks as stated on frontend mentor
const initial_tasks = [
    {
        id: 1,
        name: "Complete online JavaScript course",
        is_completed: true,
    },
    {
        id: 2,
        name: "Jog around the park 3x",
        is_completed: false,
    },
    {
        id: 3,
        name: "10 minutes meditation",
        is_completed: false,
    },
    {
        id: 4,
        name: "Read for 1 hour",
        is_completed: false,
    },
    {
        id: 5,
        name: "Pick up groceries",
        is_completed: false,
    },
    {
        id: 6,
        name: "Complete Todo App on Frontend Mentor",
        is_completed: false,
    },
]

const initial_state = {
    tasks: [...initial_tasks],
}

const TaskSlice = createSlice({
    name: 'task',
    initialState: initial_state,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                name: action.payload.task_name,
                is_completed: false,
            });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(item => item.id !== action.payload.task_id);
        },
        updateTask: (state, action) => {
            state.tasks = state.tasks.map(item => {
                if(item.id === action.payload.task_id)
                    item.is_completed = !item.is_completed;
                return item;
            });
        },
        deleteAllCompletedTasks: (state) => {
            state.tasks = state.tasks.filter(item => item.is_completed === false);
        }
    }
});

export const { addTask, deleteTask, updateTask, deleteAllCompletedTasks } = TaskSlice.actions;
export default TaskSlice.reducer;