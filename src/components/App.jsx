import React, {useState} from 'react'

function App() {
  const initialState = 0
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count +1)
  }
  function decrement(){
    setCount(count -1)
  }
  function reset(){
    setCount(initialState)
  }
  function increment2(){
    setCount((prevValue)=>{
      return prevValue +10
    })
  }
  function decrement2(){
    setCount((prevValue)=>{
      return prevValue -10
    })
  }
  function multiply(){
    setCount((prevValue)=>{
      return prevValue *2
    })
  }
  function divide(){
    setCount((prevValue)=>{
      return prevValue / 2
    })
  }
  function modulo(){
    setCount((prevValue)=>{
      if(prevValue % 3 === 0){
        return prevValue / 3
      } else {
        return "3の倍数ではありません！"
      }
    })
  }
  return (
    <React.Fragment>
      <h1>count: {count}</h1>
      <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+10</button>
        <button onClick={decrement2}>-10</button>
      </div>
      <div>
      <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={multiply}>*2</button>
        <button onClick={divide}>/2</button>
      </div>
      <div>
        <button onClick={modulo}>3の倍数の時だけ３で割る</button>
      </div>
    </React.Fragment>
  )
}

export default App
