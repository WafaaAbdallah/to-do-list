import React from 'react'
import ListItem from "./ListItem"
import { useSelector } from "react-redux";
const List = (props) => {
    const lists = useSelector((state) => state.lists);
    let listArray = props.data.map((elem,i) => <ListItem list={elem} key={i.toString()} />)
    return (<div>{listArray}</div>)
}
export default List