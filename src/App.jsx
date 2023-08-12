import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cvLogo from './assets/cv-builder-logo.svg'
import editIcon from './assets/icon-edit.svg'
import customizeIcon from './assets/icon-customize.svg'
import chevronUp from './assets/chevron-up.svg'

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

function Input({ label, type, id, name, value }) {
  return (
    <div className='input flex-1 min-width-0'>
      <label htmlFor={name}>
        {label}
      </label>
      <input type={type} id={id} name={name} value={value} />
    </div>
  )
}

function Inputs({ children }) {
  return (
    <div className='inputs'>
      {children}
    </div>
  )
}

function DropdownContainer({ containerName, children }) {
  return (
    <div className='input-container'>
      <div className='header'>
        <div>
          <h2 className='bittersweet'>{containerName}</h2>
        </div>
        <div>
          <img src={chevronUp} className='chevron' />
        </div>
      </div>
      {children}
    </div>
  )
}

function EditArea() {
  return (
    <>
      <div className='edit-area'>
        <Options />
        <div className='input-area'>
          <DropdownContainer containerName='Personal Details'>
            <Inputs>
              <div className='display-flex gap-16 flex-wrap'>
                <Input label='First Name' type='text' id='fname' name='fname' value='John' />
                <Input label='Last Name' type='text' id='lname' name='lname' value='Smith' />
              </div>
              <Input label='Address' type='text' id='address' name='address' value='1234 Main Street' />
              <div className='display-flex gap-16 flex-wrap'>
                <Input label='State' type='text' id='state' name='state' value='California' />
                <Input label='City' type='text' id='city' name='city' value='Redondo Beach' />
                <Input label='Zip Code' type='text' id='zip' name='zip' value='90277' />
              </div>
              <Input label='Email' type='text' id='email' name='email' value='jsmith@gmail.com' />
              <Input label='Phone Number' type='text' id='phone' name='phone' value='310-123-4567' />
            </Inputs>
          </DropdownContainer>
        </div>
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
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
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
