import React,{useState, useContext} from 'react'
import {CREATE_EVENT, DELETE_ALL_EVENTS} from "../actions/index"
import AppContext from './../contexts/AppContext';

function EventForm() {
  const {state, dispatch} = useContext(AppContext)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  function addEvent(event){
    dispatch({
      type:CREATE_EVENT,
      title,
      body
    })
    setTitle("")
    setBody("")

    event.preventDefault();
  }
  function deleteAllEvents(event){
      event.preventDefault();
      const result = window.confirm("本当に全てのイベントを削除しても良いですか？")
      if(result) dispatch({type:DELETE_ALL_EVENTS})
  }
  const unCreatable = title === "" || body === ""
  return (
    <React.Fragment>
    <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e=> setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e=> setBody(e.target.value)}/>
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0 ? true : false}>全てのイベントを削除する</button>
        <button className="btn btn-danger">全ての操作ログを削除する</button>
      </form>
    </React.Fragment>
  )
}

export default EventForm
