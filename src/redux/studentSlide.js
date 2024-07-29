import{createSlice} from "@reduxjs/toolkit"

const initialState={
    student:{
        name:"lê mèo",
        math:4,
        pro:5,
        avg:0
    },
    checked:false
}

const studentSlice=createSlice({
    //.user.user là name.user
    name:"student",
    initialState,
    reducers:{
        changeAVG(state){
            state.student.avg=(state.student.math+state.student.pro)/2
        },
        //action là truyền tham số
        rechecked(state){
            state.checked=!state.checked
        }
    }
})

export const{changeAVG,rechecked}=studentSlice.actions
export default studentSlice.reducer