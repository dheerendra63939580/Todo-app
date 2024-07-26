import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'todo',
    initialState:  [],
    reducers: {
        addTask: (state,action)=>{
            state.push(action.payload);// will add each task as last element in the state array
        },
        removeTask: (state,action)=>{
            state.splice(action.payload,1);
        },
        updateTask: (state,action)=>{
            var k = prompt('enter task again');
            
            if(k) {
                state[action.payload] = k;// this will update the task. if the user is not entering any value it will not update the task
                return;
            }
        }
    },
})
export default slice.reducer;
export const {addTask,removeTask,updateTask} = slice.actions