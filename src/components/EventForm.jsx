import React,{useState, useContext} from 'react'
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from "../actions/index"
import AppContext from './../contexts/AppContext';
import { timeCurrentIso8601 } from './../utils';

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
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました。",
      operatedAt: timeCurrentIso8601
    })
    setTitle("")
    setBody("")

    event.preventDefault();
  }
  function deleteAllEvents(event){
      event.preventDefault();
      const result = window.confirm("本当に全てのイベントを削除しても良いですか？")
      if(result) {
        dispatch({type:DELETE_ALL_EVENTS})

        dispatch({
          type: ADD_OPERATION_LOG,
          description: "全てのイベントを削除しました。",
          operatedAt: timeCurrentIso8601
        })
      }
  }
  const unCreatable = title === "" || body === ""
  function deleteAllOperationLogs(event){
    event.preventDefault()
    const result = window.confirm("全ての操作ログを本当に削除しても良いですか？")
    if(result){
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
        description: "全ての操作ログを削除しました。",
        operatedAt: timeCurrentIso8601
      })
    }
  }
  return (
    <React.Fragment>
    <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input 
          className="form-control" 
          id="formEventTitle" 
          value={title} 
          onChange={e=> setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea 
          className="form-control" 
          id="formEventBody" 
          value={body} 
          onChange={e=> setBody(e.target.value)}
          />
        </div>
        <button 
        className="btn btn-primary" 
        onClick={addEvent} 
        disabled={unCreatable}
        >
        イベントを作成する
        </button>
        <button 
        className="btn btn-danger" 
        onClick={deleteAllEvents} 
        disabled={state.events.length === 0 ? true : false}
        >
        全てのイベントを削除する
        </button>
        <button 
        className="btn btn-danger" 
        onClick={deleteAllOperationLogs}
        disabled={state.operationLogs.length=== 0 ? true : false}
        >
        全ての操作ログを削除する
        </button>
      </form>
    </React.Fragment>
  )
}

export default EventForm
