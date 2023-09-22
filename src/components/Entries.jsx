import briefcaseIcon from '../assets/icon-briefcase.svg'
import starIcon from '../assets/icon-star.svg'
import bookIcon from '../assets/icon-book.svg'
import awardIcon from '../assets/icon-award.svg'
import boxIcon from '../assets/icon-box.svg'
import userIcon from '../assets/icon-user.svg'
import trashIcon from '../assets/icon-trash.svg'
import eyeIcon from '../assets/icon-eye.svg'
import eyeIconHidden from '../assets/icon-eye-hidden.svg'
import { useState } from 'react'
import editIcon from '../assets/icon-edit.svg'
import { Button } from './Button'
import { InputForm, InputSet } from './Inputs'
import { createFormObj, updateObjVis } from '../App'



function Entry({ obj, entry, type, callback }) {
  const [edit, setEdit] = useState(false);
  const [visibility, setVisibility] = useState(true);
  console.log(visibility);

  if (edit === false) {
    return (
      <li className={`display-flex gap-48 justify-space-between entry visibility-${visibility}`}>
        <div className='display-flex gap-24 align-center'>
          {type === 'work' && <img src={briefcaseIcon} />}
          {type === 'volunteer' && <img src={starIcon} />}
          {type === 'education' && <img src={bookIcon} />}
          {(type === 'certification' || type === 'award') && <img src={awardIcon} />}
          {(type === 'skill-soft' || type ==='skill-technical') && <img src={boxIcon} />}
          {type === 'reference' && <img src={userIcon} />}
          {entry}
        </div>
        <div className='display-flex'>
          <Button img={editIcon} classes='edit' type='icon' handleClick={() => setEdit(true)} />
          <Button img={trashIcon} classes='edit' type='icon' />
          <Button
            img={visibility ? eyeIcon : eyeIconHidden}
            classes='edit'
            type='icon'
            handleClick={() => {
              if (visibility) {
                console.log('set to hidden');
                setVisibility(false);
                const newObj = updateObjVis(type, obj, false);
                callback(newObj, type);
              } else {
                setVisibility(true);
              const newObj = updateObjVis(type, obj, true);
              callback(newObj, type);
              }
            }}  />
        </div>
      </li>
    )
  }
  else {
    if (type === 'work') {
      return (
        <>
          <InputForm classes='work-edit'>
            <InputSet label='Position' type='text' id='position' name='position' value={obj.position} option='input-im' />
            <InputSet label='Company Name' type='text' id='company' name='company' value={obj.company} option='input-im' />
            <div className='display-flex gap-16 flex-wrap'>
              <InputSet label='Start Date' type='text' id='start-date' name='start-date' value={obj.startDate} option='input-im' />
              <InputSet label='End Date' type='text' id='end-date' name='end-date' value={obj.endDate} option='input-im' />
            </div>
            <InputSet label='Job Description' id='job-description' name='job-description' value={obj.description} option='textarea-no-cb' />
            <div className='display-flex gap-16 flex-wrap'>
              <Button
                text='Modify'
                classes='power flex-1'
                handleClick={() => {
                  const form = document.getElementsByClassName('work-edit')[0];
                  const newObj = createFormObj(obj.key, form, 'work');
                  callback(newObj, 'work');
                  setEdit(false);
                }}/>
              <Button text='Cancel' classes='outline black flex-1' handleClick={() => setEdit(false)}/>
            </div>
          </InputForm>
        </>
      )
    }
    else if (type === 'volunteer') {
      return (
        <>
          <InputForm classes='volunteer-edit'>
            <div className='display-flex gap-16 flex-wrap'>
              <InputSet label='Position' type='text' id='position' name='position' value={obj.position} option='input-im' />
              <InputSet label='Organization' type='text' id='organization' name='organization' value={obj.organization} option='input-im' />
            </div>
            <div className='display-flex gap-16 flex-wrap'>
              <InputSet label='Start Date' type='text' id='start-date' name='start-date' value={obj.startDate} option='input-im' />
              <InputSet label='End Date' type='text' id='end-date' name='end-date' value={obj.endDate} option='input-im' />
            </div>
            <InputSet label='Job Description' id='volunteer-description' name='volunteer-description' value={obj.description} option='textarea-no-cb' />
            <div className='display-flex gap-16 flex-wrap'>
              <Button
                text='Modify'
                classes='power flex-1'
                handleClick={() => {
                  const form = document.getElementsByClassName('volunteer-edit')[0];
                  const newObj = createFormObj(obj.key, form, 'volunteer');
                  callback(newObj, 'volunteer');
                  setEdit(false);
                }} />
              <Button text='Cancel' classes='outline black flex-1' handleClick={() => setEdit(false)}/>
            </div>
          </InputForm>
        </>
      )
    }
    else if (type === 'education') {
      return (
        <InputForm classes='education-edit'>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Degree' type='text' id='degree' name='degree' value={obj.degree} option='input-im' />
            <InputSet label='Institution' type='text' id='institution' name='institution' value={obj.institution} option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Start Date' type='text' id='start-date' name='start-date' value={obj.startDate} option='input-im' />
            <InputSet label='End Date' type='text' id='end-date' name='end-date' value={obj.endDate} option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <Button
              text='Modify'
              classes='power flex-1'
              handleClick={() => {
                const form = document.getElementsByClassName('education-edit')[0];
                const newObj = createFormObj(obj.key, form, 'education');
                callback(newObj, 'education');
                setEdit(false);
              }} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setEdit(false)} />
          </div>
        </InputForm>
      )
    }
    else if (type === 'certification') {
      return (
        <InputForm classes='certification-edit'>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Certification' type='text' id='certification' name='certification' value={obj.certification} option='input-im' />
            <InputSet label='Institution' type='text' id='institution' name='institution' value={obj.institution} option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Start Date' type='text' id='start-date' name='start-date' value={obj.startDate} option='input-im' />
            <InputSet label='End Date' type='text' id='end-date' name='end-date' value ={obj.endDate} option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <Button
              text='Modify'
              classes='power flex-1'
              handleClick={() => {
                const form = document.getElementsByClassName('certification-edit')[0];
                const newObj = createFormObj(obj.key, form, 'certification');
                callback(newObj, 'certification');
                setEdit(false);
              }} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setEdit(false)}/>
          </div>
        </InputForm>
      )
    }
    else if (type === 'skill-soft') {
      return (
        <InputForm classes='skill-soft-edit'>
          <InputSet label='Skill' type='text' id='skill' name='skill' value={obj.skill} option='input-im' />
          <div className='display-flex gap-16 flex-wrap'>
            <Button text='Modify'
              classes='power flex-1' 
              handleClick={() => {
                const form = document.getElementsByClassName('skill-soft-edit')[0];
                const newObj = createFormObj(obj.key, form, 'skill');
                callback(newObj, 'skill-soft');
                setEdit(false);
              }} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setEdit(false)}/>
          </div>
        </InputForm>
      )
    }
    else if (type === 'skill-technical') {
      return (
        <InputForm classes='skill-technical-edit'>
          <InputSet label='Skill' type='text' id='skill' name='skill' value={obj.skill} option='input-im' />
          <div className='display-flex gap-16 flex-wrap'>
            <Button text='Modify'
              classes='power flex-1' 
              handleClick={() => {
                const form = document.getElementsByClassName('skill-technical-edit')[0];
                const newObj = createFormObj(obj.key, form, 'skill');
                callback(newObj, 'skill-technical');
                setEdit(false);
              }} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setEdit(false)}/>
          </div>
        </InputForm>
      )
    }
    else if (type === 'award') {
      return (
        <InputForm classes='award-edit'>
          <InputSet label='Award' type='input' id='award' name='award' value={obj.award} option='input-im' />
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Organization' type='input' id='organization' name='organization' value={obj.organization} option='input-im' />
            <InputSet label='Date Awarded' type='input' id='date' name='date' value={obj.date} option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <Button
              text='Modify'
              classes='power flex-1'
              handleClick={() => {
                const form = document.getElementsByClassName('award-edit')[0];
                const newObj = createFormObj(obj.key, form, 'award');
                callback(newObj, 'award');
                setEdit(false);
              }} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setEdit(false)} />
          </div>
        </InputForm>
      )
    }
    else if (type === 'reference') {
      return (
        <InputForm classes='reference-edit'>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Name' type='text' id='name' name='name' value={obj.name} option='input-im' />
            <InputSet label='Position' type='text' id='position' name='position' value={obj.position} option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <InputSet label='Contact Info (Phone or Email)' type='text' id='contact' name='contact' value={obj.contact} option='input-im' />
          </div>
          <div className='display-flex gap-16 flex-wrap'>
            <Button
              text='Modify'
              classes='power flex-1'
              handleClick={() => {
                const form = document.getElementsByClassName('reference-edit')[0];
                const newObj = createFormObj(obj.key, form, 'reference');
                callback(newObj, 'reference');
                setEdit(false);
              }} />
            <Button text='Cancel' classes='outline black flex-1' handleClick={() => setEdit(false)} />
          </div>
        </InputForm>
      )
    }
  }
}
  
export function Entries({ children }) {
  return (
      <ul className='entries display-flex flex-column gap-16'>
        {children}
      </ul>
  )
}

export function List(props) {
  switch(props.formClass) {
    case 'work':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={entry.key} entry={entry.position} type={entry.type} obj={entry} callback={props.callBack} />
          })}
        </>
      )
    case 'volunteer':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={entry.key} entry={entry.position} type={entry.type} obj={entry} callback={props.callBack} />
          })}
        </>
      )  
    case 'education':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={entry.key} entry={entry.degree} type={entry.type} obj={entry} callback={props.callBack} />
          })}
        </>
      )
    case 'certification':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={entry.key} entry={entry.certification} type={entry.type} obj={entry} callback={props.callBack} />
          })}
        </>
      )
    case 'skill-soft':
    case 'skill-technical':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={entry.key} entry={entry.skill} type={props.formClass} obj={entry} callback={props.callBack} />
          })}
        </>
      )
    case 'award':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={entry.key} entry={entry.award} type={entry.type} obj={entry} callback={props.callBack} />
          })}
        </>
      )
    case 'reference':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={entry.key} entry={entry.name} type={entry.type} obj={entry} callback={props.callBack} />
          })}
        </>
      )
  }
}