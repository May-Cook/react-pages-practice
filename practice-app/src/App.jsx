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
      <p>This site is hosted on <a href="https://pages.github.com/">Github pages</a> and was made using: </p>
        <ul className='intro-list'>
          <li><a href="https://react.dev/">React</a></li>
          <li><a href="https://vitejs.dev/">Vite</a></li>
          <li><a href="https://bun.sh/">Bun</a></li>
        </ul>
        <p>it was created by <a href= "https://github.com/May-Cook">May Cook</a></p>
        </div>
      </div>
    </>
  )
}

export default App
