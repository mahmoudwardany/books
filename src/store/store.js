import { configureStore } from "@reduxjs/toolkit";
import bookFav  from "../feature/BookFav";
import  bookSlice  from "../feature/BookSlice";



 const store=configureStore({
    reducer:{
        books:bookSlice,
        fav:bookFav
    }
})
export default store