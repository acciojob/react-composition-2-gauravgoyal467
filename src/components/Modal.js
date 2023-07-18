import React, { Children } from 'react'

const Model = ({visible,onClose,children}) => {
    if (!visible) return null;
  return (
    <div className='model-overlay'onClick={onClose}>
        <button className="model-close" >Close</button>
        className="model-p"{children}
    </div>
  )
}

export default Model