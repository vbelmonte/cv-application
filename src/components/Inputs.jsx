import { useState } from 'react'

function handleChange(e, callback) {
  callback(e.target.value);
}

export function Input({ type, id, name, value, callback }) {
  return (
    <input
      className='input-type'
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={e => handleChange(e, callback)}
      />
  )
}
  
export function InputIm({ type, id, name, value }) {
  const [text, setText] = useState(value);

  return (
    <input
      className='input-type'
      type={type}
      id={id}
      name={name}
      value={text}
      onChange={e => handleChange(e, setText)}
    />
  )
}
  
export function InputSelectState({ id, name, select, callback }) {
  const states = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}];
  
  return (
    <select name={name} id={id} value={select} onChange={e => {handleChange(e, callback)}}>
      {select === 'default' && <option disabled value='default'>Select State</option>}
      {select !== 'default' && <option disabled>Select State</option>}
      {states.map( (state) => {
        if (state.abbreviation === select) {
          return (
            <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
          )
        } else {
          return (
            <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
          )
        }
      })}
    </select>
  )
}

export function InputSelectSkill({ id, name, select, callback }) {
  return (
    <select name={name} id={id} defaultValue={select} onChange={e => {handleChange(e, callback)}}>
      {select === 'default' && <option disabled value='default'>Select Skill Type</option>}
      {select !== 'default' && <option disabled>Select Skill Type</option>}
      <option key='soft' value='soft'>Soft</option>
      <option key='technical' value='technical'>Technical</option>
    </select>
  )
}

function InputSelectFont({ id, name, select, callback }) {
  const fonts = [
    {
      'name': 'Inter',
      'value': 'Inter Regular'
    },
    {
      'name': 'Montserrat',
      'value': 'Montserrat Regular'
    },
    {
      'name': 'Georgia',
      'value': 'Georgia'
    },
    {
      'name': 'Oswald/Lato',
      'value': 'Oswald'
    }
  ]

  return (
    <select name={name} id={id} value={select} onChange={e => {handleChange(e, callback)}}>
      {fonts.map( (font) => {
        return (
          <option key={font.name} value={font.value}>{font.name}</option>
        )
      })}
    </select>
  )
}
  
export function TextArea({ id, name, value, callback, type }) {
  const [text, setText] = useState(value);
  if (type === 'no-cb') {
    return (
    <textarea id={id} name={name} rows='4' value={text} onChange={e => handleChange(e, setText)}>
    </textarea>
    )
  } else {
    return (
      <textarea id={id} name={name} rows='4' value={value} onChange={e => handleChange(e, callback)}>
      </textarea>
    )
  }
}

export function RadioImg({ id, name, value, src, state, callback }) {
  return (
    <label htmlFor={id}>
      <input type='radio' id={id} name={name} value={value} checked={value === state} onChange={e => handleChange(e, callback)} />
      <img className='radio-img' src={src} />
    </label>
  )
}

export function InputColor({ id, name, value, callback }) {
  return (
    <input type='color' id={id} name={name} value={value} onChange={e => {handleChange(e, callback)}} />
  )
}
  
export function InputSet({ label, type, id, name, value, option, callback, select, classes }) {
  if (classes === undefined) {
    classes = '';
  }

  return (
    <div className={'input flex-1 min-width-0 ' + classes}>
      <label htmlFor={name}>
        {label}
      </label>
      {option === 'input' && <Input type={type} id={id} name={name} value={value} callback={callback} />}
      {option === 'input-im' && <InputIm type={type} id={id} name={name} value={value}/>}
      {option === 'textarea' && <TextArea id={id} name={name} value={value} callback={callback} />}
      {option === 'textarea-no-cb' && <TextArea id={id} name={name} value={value} type='no-cb' />}
      {option === 'select-state' && <InputSelectState id={id} name={name} select={select} callback={callback} />}
      {option === 'select-font' && <InputSelectFont id={id} name={name} select={select} callback={callback} />}
      {option === 'color' && <InputColor id={id} name={name} value={value} callback={callback} />}
    </div>
  )
}
  
export function InputForm({ children, classes }) {
  if (classes === undefined) {
    classes = '';
  }
  return (
    <form className={classes}>
      {children}
    </form>
  )
}