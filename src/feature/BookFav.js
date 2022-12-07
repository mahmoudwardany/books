import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'

export const bookFav=createSlice({
    initialState:{
        bookItem:localStorage.getItem('bookItems')?JSON.parse(localStorage.getItem('bookItems')):[],
    },
    name:"bookFav",
    reducers:{
        addtoFav:(state,action)=>{
            const findBook=state.bookItem.find((book)=>book.id === action.payload.id)
            if(findBook){
                findBook.BookQaunity +=1       
                toast.info('Increased Book to Favorites',{
                position:'bottom-left'
                })
            }
            else{
                const BookClone={...action.payload,BookQaunity:1}
                state.bookItem.push(BookClone)  
                toast.success(`${action.payload.title}  added Successfully to Your Favorite'`,{
                position:'bottom-left'
        })
        }
        localStorage.setItem('bookItems',JSON.stringify(state.bookItem))
        },
        removeFromFav(state,action){
        const rmCart=  state.bookItem.filter((book)=> book.id !== action.payload.id
        
        )
      state.bookItem=rmCart
      localStorage.setItem('bookItems',JSON.stringify(state.bookItem))
      toast.error(`Removed ${action.payload.title} Successfully`,{
        position:'bottom-left'
    })
        },
        ClearBook:(state,action)=>{
            state.bookItem = []
            toast.error(`All Books Deleted`,{
                position:'bottom-left'
            })
            localStorage.setItem('bookItems',JSON.stringify(state.bookItem))
        },
    }
})
export const{addtoFav,removeFromFav,ClearBook}=bookFav.actions;
export default bookFav.reducer