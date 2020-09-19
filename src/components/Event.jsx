import React, {useContext} from 'react'
import {
  DELETE_EVENT,
  ADD_OPERATION_LOG
} from "../actions/index"
import AppContext from './../contexts/AppContext';
import { timeCurrentIso8601 } from './../utils';

function Event({event}){
  const {dispatch} = useContext(AppContext)
    const id = event.id
    const handleClick = (event)=>{
      event.preventDefault();
      const result = window.confirm(`イベント(ID=${id})を本当に削除しても良いですか?`)
      if(result){
        dispatch({type: DELETE_EVENT, id})
        dispatch({
          type: ADD_OPERATION_LOG,
          description: `イベント(ID=${id})を削除しました。`,
          operatedAt: timeCurrentIso8601()
        })
      }
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
