import React, { Children } from 'react'

const Model = ({visible,onClose,children}) => {
    if (!visible) return null;
  return (
    <div className='model-overlay'onClick={onClose}>
        <button className="model-close" >Close</button>
        <p>className="model-p"{children}</p>
    </div>
  )
}

export default Model