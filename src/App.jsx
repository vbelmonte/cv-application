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
import plusIcon from './assets/icon-plus.svg'



function Navigation() {
  return (
    <nav>
      <img src={cvLogo} />
    </nav>
  )
}

function Button({ text, classes, img, imgClasses, type, handleClick }) {

  if (type === 'icon-text') {
    return (
      <button className={classes + ' icon-text'} onClick={handleClick}>
        <img src={img} className={imgClasses + ' icon-16'} />
        {text}
      </button>
    )
  } else if (type === 'icon') {
    return (
      <button className={classes + ' icon'} onClick={handleClick}>
        <img src={img} className='icon-20' />
      </button>
    )
  } else if (type === 'outline') {
    return (
      <button className={classes + ' outline'} onClick={handleClick}>
        {text}
      </button>
    )
  } else {
    return (
      <button className={classes} onClick={handleClick}>
        {text}
      </button>
    )
  }
}

function handleChange(e, callback, type) {
  if (type=== 'change') {
    callback(e.target.value);
  } else {
    callback('');
  }
}

function clearAllFields() {
  const inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i+=1) {
    inputs[i].value = '';
  }
  const textarea = document.getElementsByTagName('textarea');
  for (let i = 0; i < textarea.length; i+=1) {
    textarea[i].value = '';
  }

  const select = document.getElementsByTagName('select');
  select[0].selectedIndex = 0;
}

function Options() {
  return (
    <div className='options-container'>
      <div className='buttons'>
        <div className='left'>
          <Button text='Edit' img={editIcon} type='icon-text' />
          <Button text='Customize' img={customizeIcon} type='icon-text' />
        </div>
        <div className='right'>
          <Button text='Clear Resume' classes='red' type='outline' handleClick={clearAllFields} />
        </div>
      </div>
    </div>
  )
}

function Input({ type, id, name, value}) {
  const [text, setText] = useState(value);

  return (
    <input
      className='input-type'
      type={type}
      id={id}
      name={name}
      value={text}
      onChange={e => {handleChange(e, setText, 'change')}}
      />
  )
}

function InputSelectState({ id, name }) {
  const states = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}];

  return (
    <select name={name} id={id} defaultValue='default'>
      <option disabled value='default'>Select State</option>
      {states.map( (state) => {
        return (
        <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
        )
      })}
    </select>
  )
}

function TextArea({ id, name, defaultValue }) {
  return (
    <textarea id={id} name={name} rows='4'>
      {defaultValue}
    </textarea>
  )
}

function InputSet({ label, type, id, name, value, option }) {
  return (
    <div className='input flex-1 min-width-0'>
      <label htmlFor={name}>
        {label}
      </label>
      {option === 'input' && <Input type={type} id={id} name={name} value={value} />}
      {option === 'textarea' && <TextArea id={id} name={name} value={value} />}
      {option === 'select' && <InputSelectState id={id} name={name} />}
    </div>
  )
}

function InputForm({ children, classes }) {
  return (
    <div className={'input-form ' + classes}>
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
      <div className='display-flex'>
        <Button img={editIcon} classes='edit' type='icon' />
        <Button img={trashIcon} classes='edit' type='icon' />
        <Button img={eyeIcon} classes='edit' type='icon' />
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

function DropdownContainer({ containerName, children, containerType }) {

  const [hidden, setHidden] = useState('');

  function toggleHidden() {
    if (hidden === 'hidden') {
      setHidden('');
    } else {
      setHidden('hidden');
    }
  }

  if (containerType === 'no-entries') {
    return (
      <div className='input-container'>
        <div className='header'>
          <div>
            <h2 className='onyx'>{containerName}</h2>
          </div>
          <div>
            <img src={chevronUp} className='chevron' onClick={toggleHidden} />
          </div>
        </div>
        <div className={hidden}>
          {children}
        </div>
      </div>
    )
  } else {
      return (
      <div className='input-container'>
        <div className='header'>
          <div>
            <h2 className='onyx'>{containerName}</h2>
          </div>
          <div>
            <img src={chevronUp} className='chevron' onClick={toggleHidden}/>
          </div>
        </div>
        <div className={'entries-input-container display-flex flex-column gap-32 ' + hidden}>
          {children}
        </div>
      </div>
      )
  }
}

function EditArea() {
  return (
    <>
      <div className='edit-area'>
        <Options />
        <div className='input-area'>
          <DropdownContainer containerName='Personal Details' containerType='no-entries'>
            <InputForm classes='padding-left-32'>
              <div className='display-flex gap-16 flex-wrap'>
                <InputSet label='First Name' type='text' id='fname' name='fname' value='John' option='input' />
                <InputSet label='Last Name' type='text' id='lname' name='lname' value='Smith' option='input' />
              </div>
              <InputSet label='Address' type='text' id='address' name='address' value='1234 Main Street' option='input' />
              <div className='display-flex gap-16 flex-wrap'>
                <InputSet label='State' id='state' name='state' option='select' />
                <InputSet label='City' type='text' id='city' name='city' value='Redondo Beach' option='input' />
                <InputSet label='Zip Code' type='text' id='zip' name='zip' value='90277' option='input' />
              </div>
              <InputSet label='Email' type='text' id='email' name='email' value='jsmith@gmail.com' option='input' />
              <InputSet label='Phone Number' type='text' id='phone' name='phone' value='310-123-4567' option='input' />
            </InputForm>
          </DropdownContainer>
          <DropdownContainer containerName='Summary Statement' containerType='no-entries'>
            <InputForm classes='padding-left-32'>
              <InputSet label='Summary' id='summary' name='summary' defaultValue='Your summary statement here' option='textarea' />
            </InputForm>
          </DropdownContainer>
          <DropdownContainer containerName='Work Experience'>
            <Entries>
              <Entry entry='Sony' type='work' />
            </Entries>
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
            <Button text='Add Work Experience' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' />
          </DropdownContainer>
          <DropdownContainer containerName='Volunteer Experience'>
            <Entries>
              <Entry entry='Volunteer' type='volunteer' />
            </Entries>
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
            <Button text='Add Volunteer Experience' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' />
          </DropdownContainer>
          <DropdownContainer containerName='Education'>
            <Entries>
              <Entry entry='Some University' type='education' />
            </Entries>
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
            <Button text='Add Education' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' />
          </DropdownContainer>
          <DropdownContainer containerName='Certifications'>
            <Entries>
              <Entry entry='Certification' type='certification' />
            </Entries>
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
            <Button text='Add Certification' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' />
          </DropdownContainer>
          <DropdownContainer containerName='Skills'>
            <Entries>
              <Entry entry='Project Management' type='skill' />
            </Entries>
            <InputForm>
                <Input type='input' id='skill' name='skill' />
                <div className='display-flex gap-16 flex-wrap'>
                  <Button text='Add' classes='power flex-1' />
                  <Button text='Cancel' classes='outline black flex-1' />
                </div>
            </InputForm>
            <Button text='Add Skill' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' />
          </DropdownContainer>
          <DropdownContainer containerName='Awards'>
            <Entries>
              <Entry entry='Some Award' type='award' />
            </Entries>
            <InputForm>
                <Input type='input' id='award' name='award' />
                <div className='display-flex gap-16 flex-wrap'>
                  <Button text='Add' classes='power flex-1' />
                  <Button text='Cancel' classes='outline black flex-1' />
                </div>
            </InputForm>
            <Button text='Add Award' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' />
          </DropdownContainer>
          <DropdownContainer containerName='References'>
            <Entries>
              <Entry entry='John Smith' type='reference' />
            </Entries>
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
            <Button text='Add Reference' classes='small bittersweet' imgClasses='bittersweet-filter' img={plusIcon} type='icon-text' />
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
