import {configureStore} from "@reduxjs/toolkit"
import countSlice from "./countSilde";
import userReducer from "./userSlice";
import studentSlice from "./studentSlide"
import listSlice from "./listSlice"
const store=configureStore({
    reducer:{
        count:countSlice,
        user:userReducer,
        student:studentSlice,
        students:listSlice
    }
})

export default store
