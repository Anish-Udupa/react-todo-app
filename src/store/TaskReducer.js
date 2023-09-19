import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    tasks: [],
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
            state.tasks = state.tasks.filter(item => item.id != action.payload.task_id);
        },
        updateTask: (state, action) => {
            state.tasks = state.tasks.map(item => {
                if(item.id === action.payload.task_id)
                    item.is_completed = !item.is_completed;
                return item;
            });
        },
        deleteAllCompletedTasks: (state) => {
            state.tasks = state.tasks.filter(item => item.is_completed == false);
        }
    }
});

export const { addTask, deleteTask, updateTask, deleteAllCompletedTasks } = TaskSlice.actions;
export default TaskSlice.reducer;