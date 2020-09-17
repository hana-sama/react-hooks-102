import React, {useState, useEffect} from 'react'

function App(props) {
  const [state, setState] = useState(props)
  const {name, price} = state
  const reset = ()=> setState(props)
  useEffect(()=>{
    console.log("This function called only when name parameter is changed")
  },[name])
  useEffect(()=>{
    console.log("This function called only when price parameter is changed")
  },[price])
  useEffect(()=>{
    console.log("This function called only when initial DOM is rendered")
  },[])
  useEffect(()=>{
    console.log("This function function almost like componentDidMount or componentUpdate")
  })

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
