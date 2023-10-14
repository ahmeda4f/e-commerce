import { createSlice } from "@reduxjs/toolkit";

let initialState={
    count:0,
    username:"ahmed"
}

export let  counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment :(state)=>{
            state.count++;
        },
        decrement : (state)=>{
            state.count--;
    },
    incByMount: (state , action)=>{
        state.count += action.payload;
}}})
export default counterSlice.reducer;
export const {increment , decrement , incByMount} = counterSlice.actions;
