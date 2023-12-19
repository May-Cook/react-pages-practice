import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>React test site</h1>
      <div className='intro'>
      <p>This site is hosted on Github pages and was made using: </p>
        <ul className='intro-list'>
          <li>React</li>
          <li>Vite</li>
          <li>Bun</li>
        </ul>
        </div>
      </div>
    </>
  )
}

export default App
