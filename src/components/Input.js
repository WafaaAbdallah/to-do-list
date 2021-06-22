import React , {useState} from "react"
import {addList} from "../store/actions"
import { useDispatch } from "react-redux"
import { list } from "postcss"
export default (props)=>{
const dispatch = useDispatch()
    const [todo,setTodo] = useState('')
    const [date,setDate] = useState('')
    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch(addList(list))
    }
    const handleChange=(event)=>{
        setTodo({...list,[event.target.name]: event.target.value})


    }
    const handleDate=(e)=>{
        setDate({...list,[e.target.name]:e.target.value })
    }
        // call add api
        // {
        //     name:todo,
        //     date:date,
        //     isDone:false
        // }
    
    return(
        <form style={{flexDirection:"row"}}>
            <input name = "name" onChange={handleChange} type='text' style={{width:300}}/>
            <button onSubmit={handleSubmit}>Submit</button>
            <input name = "date" onChange={(e)=>setDate(e.target.value)} type="date" />
        </form>
    )
}