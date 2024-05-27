import { createSlice } from "@reduxjs/toolkit";

const postSlice=createSlice({
    name:'post',
    initialState:{
        postData:null,
        createdData:null
    },
    reducers:{
        postFetchData:(state,action)=>{
            state.postData=action.payload;
        },
        createdData:(state,action)=>{
            state.createdData=action.payload;
        }
    },
});
// export actions
export const {postFetchData,createdData}=postSlice.actions;
export default postSlice.reducer;
