import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Accordion component */}
        <Accordion/>
        </div>
    </>
  )
}

export default App
