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

function Button( {text, classes} ) {
  return (
    <button className={classes}>
      {text}
    </button>
  )
}

function Input({ type, id, name, value}) {
  return <input type={type} id={id} name={name} value={value} />
}

function TextArea({ id, name, value }) {
  return (
    <textarea id={id} name={name} rows='4'>
      {value}
    </textarea>
  )
}

function InputSet({ label, type, id, name, value, option }) {
  return (
    <div className='input flex-1 min-width-0'>
      <label htmlFor={name}>
        {label}
      </label>
      {/*<Input type={type} id={id} name={name} value={value} />*/}
      {option === 'input' && <Input type={type} id={id} name={name} value={value} />}
      {option === 'textarea' && <TextArea id={id} name={name} value={value} />}
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
                <InputSet label='First Name' type='text' id='fname' name='fname' value='John' option='input' />
                <InputSet label='Last Name' type='text' id='lname' name='lname' value='Smith' option='input' />
              </div>
              <InputSet label='Address' type='text' id='address' name='address' value='1234 Main Street' option='input' />
              <div className='display-flex gap-16 flex-wrap'>
                <InputSet label='State' type='text' id='state' name='state' value='California' option='input' />
                <InputSet label='City' type='text' id='city' name='city' value='Redondo Beach' option='input' />
                <InputSet label='Zip Code' type='text' id='zip' name='zip' value='90277' option='input' />
              </div>
              <InputSet label='Email' type='text' id='email' name='email' value='jsmith@gmail.com' option='input' />
              <InputSet label='Phone Number' type='text' id='phone' name='phone' value='310-123-4567' option='input' />
            </Inputs>
          </DropdownContainer>
          <DropdownContainer containerName='Summary Statement'>
            <Inputs>
              <InputSet label='Summary' id='summary' name='summary' value='Your summary statement here' option='textarea' />
            </Inputs>
          </DropdownContainer>
          <DropdownContainer containerName='Work Experience'>
            <Inputs>
              <InputSet label='Position' type='text' id='position' name='position' value='Software Engineer' option='input' />
              <InputSet label='Company Name' type='text' id='company' name='company' value='Sony' option='input' />
              <div className='display-flex gap-16 flex-wrap'>
                <InputSet label='Start Date' type='text' id='start-date' name='start-date' option='input' />
                <InputSet label='End Date' type='text' id='end-date' name='end-date' option='input' />
              </div>
              <div className='display-flex gap-16 flex-wrap'>
                <Button text='Add' classes='power flex-1' />
                <Button text='Cancel' classes='outline black flex-1' />
              </div>
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
