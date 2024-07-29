import React from 'react'
import { useState } from 'react';

export default function Add(props) {
    const {handle_add}=props
    const [name,setName]=useState("")
  return (
    <div>
       <input placeholder="nhap name" value={name} onChange={(e)=>setName(e.target.value)}
       
       onKeyDown={
        (e)=>{
            if(e.key==="Enter"){
                handle_add(name)
                setName("")
            }
        }
    }

       />
    </div>
  )
}
