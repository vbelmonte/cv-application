import { useState } from 'react'
import chevronUp from '../assets/chevron-up.svg'


export function DropdownContainer({ containerName, children, containerType }) {
    const [hidden, setHidden] = useState('');
    const [chevron, setChevron] = useState('up');
  
    function toggleHidden() {
      if (hidden === 'hidden') {
        setHidden('');
        setChevron('up')
      } else {
        setHidden('hidden');
        setChevron('down');
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
              <img src={chevronUp} className={'chevron ' + chevron} onClick={toggleHidden} />
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
              <img src={chevronUp} className={'chevron ' + chevron} onClick={toggleHidden}/>
            </div>
          </div>
          <div className={'entries-input-container display-flex flex-column gap-32 ' + hidden}>
            {children}
          </div>
        </div>
        )
    }
  }