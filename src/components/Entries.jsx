import briefcaseIcon from '../assets/icon-briefcase.svg'
import starIcon from '../assets/icon-star.svg'
import bookIcon from '../assets/icon-book.svg'
import awardIcon from '../assets/icon-award.svg'
import boxIcon from '../assets/icon-box.svg'
import userIcon from '../assets/icon-user.svg'
import trashIcon from '../assets/icon-trash.svg'
import eyeIcon from '../assets/icon-eye.svg'
import eyeIconHidden from '../assets/icon-eye-hidden.svg'
import editIcon from '../assets/icon-edit.svg'
import { useState } from 'react'
import { Button } from './Button'
import { InputForm, InputSet } from './Inputs'


function createFormObj(key, form, formName) {
  let obj;
  switch(formName) {
    case 'work':
      obj = {
        position: form.elements['position'].value,
        company: form.elements['company'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        description: form.elements['job-description'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'volunteer':
      obj = {
        position: form.elements['position'].value,
        organization: form.elements['organization'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        description: form.elements['volunteer-description'].value,
        key: key,
        visibility: true,
        type: formName
      };
      break;
    case 'education':
      obj = {
        degree: form.elements['degree'].value,
        institution: form.elements['institution'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'certification':
      obj = {
        certification: form.elements['certification'].value,
        institution: form.elements['institution'].value,
        startDate: form.elements['start-date'].value,
        endDate: form.elements['end-date'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'skill-soft':
      obj = {
        skill: form.elements['skill'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'skill-technical':
      obj = {
        skill: form.elements['skill'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'award':
      obj = {
        award: form.elements['award'].value,
        organization: form.elements['organization'].value,
        date: form.elements['date'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
    case 'reference':
      obj = {
        name: form.elements['name'].value,
        position: form.elements['position'].value,
        contact: form.elements['contact'].value,
        key: key,
        visibility: true,
        type: formName
      }
      break;
  }
  return obj;
}

function updateObjVis(objType, obj, visibile) {
  let newObj;
  switch(objType) {
    case 'work':
      newObj = {
        position: obj.position,
        company: obj.company,
        startDate: obj.startDate,
        endDate: obj.endDate,
        description: obj.description,
        key: obj.key,
        visibility: visibile,
        type: obj.type
      }
      break;
    case 'volunteer':
      newObj = {
        position: obj.position,
        organization: obj.organization,
        startDate: obj.startDate,
        endDate: obj.endDate,
        description: obj.description,
        key: obj.key,
        visibility: visibile,
        type: obj.type
      }
      break;
    case 'education':
      newObj = {
        degree: obj.degree,
        institution: obj.institution,
        startDate: obj.startDate,
        endDate: obj.endDate,
        key: obj.key,
        visibility: visibile,
        type: obj.type,
      }
      break;
    case 'certification':
      newObj = {
        certification: obj.certification,
        institution: obj.institution,
        startDate: obj.startDate,
        endDate: obj.endDate,
        key: obj.key,
        visibility: visibile,
        type: obj.type
      }
      break;
    case 'skill-soft':
    case 'skill-technical':
      newObj = {
        skill: obj.skill,
        key: obj.key,
        visibility: visibile,
        type: obj.type
      }
      break;
    case 'award':
      newObj = {
        award: obj.award,
        organization: obj.organization,
        date: obj.date,
        key: obj.key,
        visibility: visibile,
        type: obj.type
      }
      break;
    case 'reference':
      newObj = {
        name: obj.name,
        position: obj.position,
        contact: obj.contact,
        key: obj.key,
        visibility: visibile,
        type: obj.type
      }
      break;
  }
  return newObj;
}

function Entry({ obj, entry, type, callback, warningCallBack }) {
  const [edit, setEdit] = useState(false);
  const [visibility, setVisibility] = useState(obj.visibility);
  
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
          <Button
            img={editIcon}
            imgTitle='Edit entry'
            classes='edit'
            type='icon'
            handleClick={() => setEdit(true)} />
          <Button
            img={trashIcon}
            imgTitle='Delete entry'
            classes='edit'
            type='icon'
            handleClick={() => {
              warningCallBack(entry, obj, true);
            }} />
          <Button
            img={visibility ? eyeIcon : eyeIconHidden}
            imgTitle='Show/Hide entry'
            classes='edit'
            type='icon'
            handleClick={() => {
              if (visibility) {
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
                const newObj = createFormObj(obj.key, form, 'skill-soft');
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
                const newObj = createFormObj(obj.key, form, 'skill-technical');
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
            return <Entry
              key={entry.key}
              entry={entry.position}
              type={entry.type}
              obj={entry}
              callback={props.callBack}
              warningCallBack={props.warningCallBack}
              />
          })}
        </>
      )
    case 'volunteer':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry
              key={entry.key}
              entry={entry.position}
              type={entry.type}
              obj={entry}
              callback={props.callBack}
              warningCallBack={props.warningCallBack}
            />
          })}
        </>
      )  
    case 'education':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry
              key={entry.key}
              entry={entry.degree}
              type={entry.type}
              obj={entry}
              callback={props.callBack}
              warningCallBack={props.warningCallBack}
            />
          })}
        </>
      )
    case 'certification':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry
              key={entry.key}
              entry={entry.certification}
              type={entry.type}
              obj={entry}
              callback={props.callBack}
              warningCallBack={props.warningCallBack}
            />
          })}
        </>
      )
    case 'skill-soft':
    case 'skill-technical':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry
              key={entry.key}
              entry={entry.skill}
              type={props.formClass}
              obj={entry}
              callback={props.callBack}
              warningCallBack={props.warningCallBack}
            />
          })}
        </>
      )
    case 'award':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry
              key={entry.key}
              entry={entry.award}
              type={entry.type}
              obj={entry}
              callback={props.callBack}
              warningCallBack={props.warningCallBack}
            />
          })}
        </>
      )
    case 'reference':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry
              key={entry.key}
              entry={entry.name}
              type={entry.type}
              obj={entry}
              callback={props.callBack}
              warningCallBack={props.warningCallBack}
            />
          })}
        </>
      )
  }
}