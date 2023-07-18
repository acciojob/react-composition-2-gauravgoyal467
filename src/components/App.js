import React, { useState } from 'react';
import './../styles/App.css';
import Modal from './Modal';

const App = () => {
  const[show,setShow]=useState(false);
  return (
    <div>
      <button className='btn' onClick={()=>setShow(true)}>Show Model</button>
      <Modal visible={show} onClose={()=>setShow(false)}>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  )
}

export default App
