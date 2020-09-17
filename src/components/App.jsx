import React, {useState} from 'react'

function App(props) {
  const [state, setState] = useState(props)
  const {name, price} = state
  const reset = ()=> setState(props)
  return (
    <React.Fragment>
      <p>現在{name}のお値段は、{price}円です。</p>
      <button onClick={()=> setState({...state, price:price +10})}>+10</button>
      <button onClick={()=> setState({...state, price:price -10})}>-10</button>
      <button onClick={reset}>Reset</button>
      <input 
      value={name}
      onChange={e => setState({...state, name: e.target.value})}
      />
    </React.Fragment>
  )
}

App.defaultProps = {
  name:"",
  price: 1000
}

export default App
