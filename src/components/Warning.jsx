import { Button } from "./Button"

export function Warning({ entry, obj, visibility, visibilityCallBack, deleteCallBack }) {
  if (visibility) {
    return (
      <div className='display-flex justify-center align-center modal'>
        <div className='display-flex flex-column gap-32 align-center modal-content warning'>
          <div>
            <p>Are you sure you want to delete <strong>"{entry}"</strong> entry?</p>
          </div>
          <div className='display-flex gap-16'>
            <Button
              text='Delete'
              classes='power'
              handleClick={() => {
                deleteCallBack(obj, obj.type);
                visibilityCallBack(false);
              }}
            />
            <Button
              text='Cancel'
              classes='outline black'
              handleClick={() => {
                visibilityCallBack(false);
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}