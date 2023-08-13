import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cvLogo from './assets/cv-builder-logo.svg'
import editIcon from './assets/icon-edit.svg'
import customizeIcon from './assets/icon-customize.svg'
import chevronUp from './assets/chevron-up.svg'
import briefcaseIcon from './assets/icon-briefcase.svg'
import starIcon from './assets/icon-star.svg'
import bookIcon from './assets/icon-book.svg'
import awardIcon from './assets/icon-award.svg'
import boxIcon from './assets/icon-box.svg'
import userIcon from './assets/icon-user.svg'
import trashIcon from './assets/icon-trash.svg'
import eyeIcon from './assets/icon-eye.svg'

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
          <button className='ghost icon'><img className='icon-16' src={editIcon} />Edit</button>
          <button className='ghost icon'><img className='icon-16' src={customizeIcon} />Customize</button>
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

function InputForm({ children }) {
  return (
    <div className='input-form'>
      {children}
    </div>
  )
}

function Entry({ entry, type }) {
  return (
    <li className='display-flex gap-48 justify-space-between entry'>
      <div className='display-flex gap-24 align-center'>
        {type === 'work' && <img src={briefcaseIcon} />}
        {type === 'volunteer' && <img src={starIcon} />}
        {type === 'education' && <img src={bookIcon} />}
        {(type === 'certification' || type === 'award') && <img src={awardIcon} />}
        {type === 'skill' && <img src={boxIcon} />}
        {type === 'reference' && <img src={userIcon} />}
        {entry}
      </div>
      <div className='display-flex gap-8'>
        <img src={editIcon} />
        <img src={trashIcon} />
        <img src={eyeIcon} />
      </div>
    </li>
  )
}

function Entries({ children }) {
  return (
    <ul className='entries display-flex flex-column gap-16'>
      {children}
    </ul>
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
            <InputForm>
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
            </InputForm>
          </DropdownContainer>
          <DropdownContainer containerName='Summary Statement'>
            <InputForm>
              <InputSet label='Summary' id='summary' name='summary' value='Your summary statement here' option='textarea' />
            </InputForm>
          </DropdownContainer>
          <DropdownContainer containerName='Work Experience'>
            <Entries>
              <Entry entry='Sony' type='work' />
              <InputForm>
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
              </InputForm>
              <Button text='Add Work Experience' classes='small' />
            </Entries>
          </DropdownContainer>
          <DropdownContainer containerName='Volunteer Experience'>
            <Entries>
              <Entry entry='Volunteer' type='volunteer' />
              <InputForm>
                <div className='display-flex gap-16 flex-wrap'>
                  <InputSet label='Position' type='text' id='position-v' name='position-v' value='Volunteer' option='input' />
                  <InputSet label='Organization' type='text' id='organization-v' name='organization-v' value='Nonprofit' option='input' />
                </div>
                <div className='display-flex gap-16 flex-wrap'>
                  <InputSet label='Start Date' type='text' id='start-date-v' name='start-date-v' option='input' />
                  <InputSet label='End Date' type='text' id='end-date-v' name='end-date-v' option='input' />
                </div>
                <div className='display-flex gap-16 flex-wrap'>
                  <Button text='Add' classes='power flex-1' />
                  <Button text='Cancel' classes='outline black flex-1' />
                </div>
              </InputForm>
              <Button text='Add Volunteer Experience' classes='small' />
            </Entries>
          </DropdownContainer>
          <DropdownContainer containerName='Education'>
            <Entries>
              <Entry entry='Some University' type='education' />
              <InputForm>
                <div className='display-flex gap-16 flex-wrap'>
                  <InputSet label='Degree' type='text' id='degree' name='degree' value='Computer Science, Bachelor of Science' option='input' />
                  <InputSet label='Institution' type='text' id='institution' name='institution' value='Some College' option='input' />
                </div>
                <div className='display-flex gap-16 flex-wrap'>
                  <InputSet label='Start Date' type='text' id='start-date-e' name='start-date-e' option='input' />
                  <InputSet label='End Date' type='text' id='end-date-e' name='end-date-e' option='input' />
                </div>
                <div className='display-flex gap-16 flex-wrap'>
                  <Button text='Add' classes='power flex-1' />
                  <Button text='Cancel' classes='outline black flex-1' />
                </div>
              </InputForm>
              <Button text='Add Education' classes='small' />
            </Entries>         
          </DropdownContainer>
          <DropdownContainer containerName='Certifications'>
            <Entries>
              <Entry entry='Certification' type='certification' />
              <InputForm>
                <div className='display-flex gap-16 flex-wrap'>
                  <InputSet label='Certification' type='text' id='certification' name='certification' value='' option='input' />
                  <InputSet label='Institution' type='text' id='institution-c' name='institution-c' value='' option='input' />
                </div>
                <div className='display-flex gap-16 flex-wrap'>
                  <InputSet label='Start Date' type='text' id='start-date-c' name='start-date-c' option='input' />
                  <InputSet label='End Date' type='text' id='end-date-c' name='end-date-c' option='input' />
                </div>
                <div className='display-flex gap-16 flex-wrap'>
                  <Button text='Add' classes='power flex-1' />
                  <Button text='Cancel' classes='outline black flex-1' />
                </div>
              </InputForm>
              <Button text='Add Certification' classes='small' />
            </Entries>
          </DropdownContainer>
          <DropdownContainer containerName='Skills'>
            <Entries>
              <Entry entry='Project Management' type='skill' />
              <InputForm>
                <Input type='input' id='skill' name='skill' />
                <div className='display-flex gap-16 flex-wrap'>
                  <Button text='Add' classes='power flex-1' />
                  <Button text='Cancel' classes='outline black flex-1' />
                </div>
              </InputForm>
              <Button text='Add Skill' classes='small' />
            </Entries>
          </DropdownContainer>
          <DropdownContainer containerName='Awards'>
            <Entries>
              <Entry entry='Some Award' type='award' />
              <InputForm>
                <Input type='input' id='award' name='award' />
                <div className='display-flex gap-16 flex-wrap'>
                  <Button text='Add' classes='power flex-1' />
                  <Button text='Cancel' classes='outline black flex-1' />
                </div>
              </InputForm>
              <Button text='Add Award' classes='small' />
            </Entries>
          </DropdownContainer>
          <DropdownContainer containerName='References'>
            <Entries>
              <Entry entry='John Smith' type='reference' />
              <InputForm>
                <div className='display-flex gap-16 flex-wrap'>
                  <InputSet label='Name' type='text' id='reference-name' name='reference-name' value='' option='input' />
                  <InputSet label='Position' type='text' id='reference-position' name='reference-position' value='' option='input' />
                </div>
                <div className='display-flex gap-16 flex-wrap'>
                  <InputSet label='Email Address' type='text' id='email-r' name='email-r' option='input' />
                  <InputSet label='Phone Number' type='text' id='phone-r' name='phone-r' option='input' />
                </div>
                <div className='display-flex gap-16 flex-wrap'>
                  <Button text='Add' classes='power flex-1' />
                  <Button text='Cancel' classes='outline black flex-1' />
                </div>
              </InputForm>
              <Button text='Add Reference' classes='small' />
            </Entries>
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
