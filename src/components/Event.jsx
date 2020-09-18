import React from 'react'
import {DELETE_EVENT} from "../actions/index"
function Event({event, dispatch}){
    const id = event.id
    const handleClick = (event)=>{
      event.preventDefault();
      const result = window.confirm(`イベント(ID=${id})を本当に削除しても良いですか?`)
      if(result)dispatch({type: DELETE_EVENT, id})
    }
    return (<tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className="btn btn-danger" onClick={handleClick}>削除</button></td>
    </tr>
  )
}

export default Event
