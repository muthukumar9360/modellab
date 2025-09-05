import { useState } from 'react'
import './App.css'
import BillCalculator from './BillCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BillCalculator />
    </>
  )
}

export default App
