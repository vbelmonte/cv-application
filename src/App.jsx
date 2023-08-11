import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cvLogo from './assets/cv-builder-logo.svg'
import editIcon from './assets/icon-edit.svg'
import customizeIcon from './assets/icon-customize.svg'

function Navigation() {
  return (
    <nav>
      <img src={cvLogo} />
    </nav>
  )
}

function Options() {
  return (
    <div className='options-container'>
      <div className='buttons'>
        <div className='left'>
          <button className='ghost icon'><img src={editIcon} />Edit</button>
          <button className='ghost icon'><img src={customizeIcon} />Customize</button>
        </div>
        <div className='right'>
          <button className='outline red'>Clear Resume</button>
        </div>
      </div>
    </div>
  )
}

function EditArea() {
  return (
    <>
      <div className='edit-area'>
        <Options />
      </div>
    </>
  )
}

function PreviewArea() {
  return (
    <>
      <div className='preview-area'>
      </div>
    </>
  )
}

function OldApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <main>
        <EditArea />
        <PreviewArea />
      </main>
    </>
  )
}

export default App
