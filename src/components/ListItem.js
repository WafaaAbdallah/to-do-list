import React from "react"
import { useDispatch } from "react-redux";
import { deleteList , updateList,isDone} from "../store/actions";

export default (props) => {
    const deleteTodo = (id) =>{
        // call delete API

    }
    const updateTodo = (id) =>{
        // call update API
    }
    const dispatch = useDispatch();
    const list = props.list
    return (
        <div key={props.key}>
            <div>
                <p>{list.name}</p><p>{list.date}</p>
            </div>
            <div>
                <button onClick={()=>dispatch(deleteList(props.list.id))}>
                    delete
                </button>
                <input type="checkbox" onChange={()=>dispatch(updateList(list._id))} />
            </div>
        </div>
    )
}
