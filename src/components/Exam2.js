import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {changeAVG,rechecked} from "../redux/studentSlide"

export default function Exam2() {
    const dispatch=useDispatch()
    const student=useSelector((state)=>state.student.student)
    const checked=useSelector((state)=>state.student.checked)
  return (
    <div>
      <h1>student name : {student.name}</h1>
      <h1>math : {student.math}</h1>
      <h1>pro : {student.pro}</h1>
      <h1>agv : {student.avg}</h1>
      <h1>checked:{checked?"true":"fasle"}</h1>
      <button onClick={()=>dispatch(changeAVG())}>Count AVG</button>
      <button onClick={()=>dispatch(rechecked())}>change checked</button>
    </div>
  )
}
