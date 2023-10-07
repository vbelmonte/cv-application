import editIcon from '../assets/icon-edit.svg'
import customizeIcon from '../assets/icon-customize.svg'
import { Button } from './Button'

export function Options({ showInput, showCustomize, children }) {
  return (
    <div className='options-container'>
      <div className='buttons'>
        <div className='left'>
          <Button text='Edit' classes='french-gray-2' img={editIcon} type='icon-text' handleClick={showInput} />
          <Button text='Customize' classes='french-gray-2' img={customizeIcon} type='icon-text' handleClick={showCustomize} />
        </div>
        <div className='right'>
          {children}
        </div>
      </div>
    </div>
  )
}