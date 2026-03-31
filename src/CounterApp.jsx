import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function CounterApp() {
  // count : 이전 또는 현재 값, setCount() : count 값 변경 함수. 반드시 이걸 거쳐야 함
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount((count) => count + 1)}>+</button>
    <button onClick={()=> setCount((count) => count + 2)}>+2</button>
    <button onClick={()=> setCount((count) => count - 1)}>-</button>
    <button onClick={()=> setCount(0)}>reset</button>


    <button onClick={() => setCount((count) => {
      if(count + 1 >= 10) {
        return 10;
      }
      else {
        return count + 1;
      }
    })}>+max10</button>

    <button onClick={()=> setCount((count) => count + 1 >= 10? 10:count+1)}>+max10(ver.2)</button>
    <button onClick={()=> setCount((count) => Math.min(count + 1, 10))}>+max10(ver.3)</button>

      {/* <button
        className="counter"
        onClick={() => setCount((count) => count + 1)} //JS 함수호출 X, 함수정의 O
      >
        Count is {count}
      </button> */}
    </>
  )
}

export default CounterApp
