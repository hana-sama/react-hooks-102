import React, {useContext} from 'react'
import Event from './Event';
import AppContext from './../contexts/AppContext';

function Events() {
  const {state} = useContext(AppContext)
  return (
    <React.Fragment>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>ボディ</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {state.events.map((event, index)=>(<Event key={index} event={event} />))}
        </tbody>
      </table>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>操作ログ</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Events
