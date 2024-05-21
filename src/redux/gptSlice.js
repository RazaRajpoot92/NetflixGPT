import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGpt:false
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGpt = !state.showGpt
        }
    }
})


export const {toggleGptSearchView} = gptSlice.actions

export default gptSlice.reducer