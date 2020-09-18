import React from 'react'

function Event({event, dispatch}){
    const id = event.id
    const handleClick = (event)=>{
      event.preventDefault();
      const result = window.confirm(`Are You Really Want to Delete This Post(ID=${id})?`)
      if(result)dispatch({type: "DELETE_EVENT", id})
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
