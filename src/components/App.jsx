import React, {useEffect, useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm';
import Events from './Events';
import AppContext from './../contexts/AppContext';
import reducer from "./reducers"
import operationLogs from './reducers/operationLogs';
import OperationLogs from "./OperationLogs"
const APP_KEY = "appWithRedux"
function App() {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ?  JSON.parse(appState) : {
    events:[],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer,initialState)
  useEffect(()=>{
    const string = JSON.stringify(state)
    localStorage.setItem(APP_KEY, string)
  },[state])

   return (
     <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
