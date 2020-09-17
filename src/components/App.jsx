import React, {useState} from 'react'

function App(props) {
   const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)
  const reset = ()=>{
    setPrice(props.price)
    setName(props.name)
  }
  return (
    <React.Fragment>
      <p>現在{name}のお値段は、{price}円です。</p>
      <button onClick={()=> setPrice(prevPrice => prevPrice+10)}>+10</button>
      <button onClick={()=> setPrice(prevPrice => prevPrice -10)}>-10</button>
      <button onClick={reset}>Reset</button>
      <input 
      value={name}
      onChange={e => setName(e.target.value)}
      />
    </React.Fragment>
  )
}

App.defaultProps = {
  name:"",
  price: 1000
}

export default App
