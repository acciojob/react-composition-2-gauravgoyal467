import React from 'react'

const Modal = ({visible,onClose}) => {
  return (
    <div className={visible ? 'model-overlay':'hide'}>
        <button className="model-close" onClick={()=>onClose(!visible)}>Close</button>
        <p className="model-p">This is the content of the modal.</p>
    </div>
  )
}

export default Modal