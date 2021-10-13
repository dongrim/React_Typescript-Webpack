require('./styles.css')
// import './styles.css';
// import IMAGE from './react.png';
import { useState } from 'react'

export const App = () => {
  const [number, setNumber] = useState(0)
  const handlerIncrement = () => {
    setNumber(number + 1)
  }
  const handlerDecrement = () => {
    setNumber(number - 1)
  }

  return (
    <>
      <h1>React Typescript Webpack Starter Template</h1>
      <p>process.env.NODE_ENV: {process.env.NODE_ENV}</p>
      <p>process.env.name: {process.env.name}</p>
      <p>number: {number}</p>
      <button onClick={handlerIncrement}>+</button>
      <button onClick={handlerDecrement}>-</button>
    </>
  )
}
