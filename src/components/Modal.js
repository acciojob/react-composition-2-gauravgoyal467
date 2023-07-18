import React from 'react'

const Model = ({visible,onClose,children}) => {
    if (!visible) return null;
  return (
    <div className='model-overlay'>
        <button className="model-close" onClick={onClose}>Close</button>
        {children}
    </div>
  )
}

export default Model