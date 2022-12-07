import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBook=createAsyncThunk('book/bookSlice',
async()=>{
const res=await fetch('https://example-data.draftbit.com/books?_limit=30')
const data=await res.json()
return data
})


export const bookSlice=createSlice({
    name:"book",
    initialState:{
        book:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchBook.fulfilled,(state,action)=>{
            state.book=action.payload;
        })
    }
})
export default bookSlice.reducer;