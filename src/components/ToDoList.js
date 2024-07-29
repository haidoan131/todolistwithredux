import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {addStudent,deleteStudent} from "../redux/listSlice"
import Add from './Add';
import { useState } from 'react';

export default function ToDoList() {
    const [flag,setFlag]=useState("")
    const dispatch=useDispatch()
    const students=useSelector(state=>state.students.students)
    const handle_add=(text)=>{
        dispatch(addStudent(text))
    }
    const filterStudent=(list,flag)=>{
        if(flag==="CHECKED"){
            return list.filter(item=>item.checked)
        }
        else if(flag==="NOCHECKED"){
            return list.filter(item=>!item.checked)
        }
        else 
            return list
    }
  return (
    <div>
        <Add handle_add={handle_add}/>
            {

               students&& filterStudent(students,flag).map((item,index)=>
                    <div>{item.name}
                    <button onClick={()=>dispatch(deleteStudent(item.id))}>delete</button>
                    </div>
                )

            }

            <button onClick={()=>setFlag("CHECKED")}>checked</button>
            <button onClick={()=>setFlag("NOCHECKED")}>NO CHECKED</button>
            <button onClick={()=>setFlag("CLEAR")}>clear</button>


    </div>
  )
}
