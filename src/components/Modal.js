import React from 'react'

const Model = ({visible,onClose}) => {
    if (!visible) return null;
  return (
    <div className='model-overlay'onClick={onClose}>
        <button className="model-close" >Close</button>
        <p className="model-p">This is the content of the modal.</p>
    </div>
  )
}

export default Model