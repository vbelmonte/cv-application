import briefcaseIcon from '../assets/icon-briefcase.svg'
import starIcon from '../assets/icon-star.svg'
import bookIcon from '../assets/icon-book.svg'
import awardIcon from '../assets/icon-award.svg'
import boxIcon from '../assets/icon-box.svg'
import userIcon from '../assets/icon-user.svg'
import trashIcon from '../assets/icon-trash.svg'
import eyeIcon from '../assets/icon-eye.svg'
import editIcon from '../assets/icon-edit.svg'
import { Button } from './Button'



function Entry({ entry, type }) {
  console.log(type);
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
  
export function Entries({ children }) {
  return (
      <ul className='entries display-flex flex-column gap-16'>
        {children}
      </ul>
  )
}

export function List(props) {
  console.log(props.formClass);
  switch(props.formClass) {
    case 'work':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={self.crypto.randomUUID()} entry={entry.position} type={entry.type}/>
          })}
        </>
      )
    case 'volunteer':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={self.crypto.randomUUID()} entry={entry.position} type={entry.type}/>
          })}
        </>
      )  
    case 'education':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={self.crypto.randomUUID()} entry={entry.degree} type={entry.type}/>
          })}
        </>
      )
    case 'certification':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={self.crypto.randomUUID()} entry={entry.certification} type={entry.type}/>
          })}
        </>
      )
    case 'skill-soft':
    case 'skill-technical':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={self.crypto.randomUUID()} entry={entry.skill} type={entry.type}/>
          })}
        </>
      )
    case 'award':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={self.crypto.randomUUID()} entry={entry.award} type={entry.type}/>
          })}
        </>
      )
    case 'reference':
      return (
        <>
          {props.list.map((entry) => {
            return <Entry key={self.crypto.randomUUID()} entry={entry.name} type={entry.type}/>
          })}
        </>
      )
  }
}