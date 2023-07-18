import React, { useState } from 'react';
import './../styles/App.css';
import Modal from './Modal';

const App = () => {
  const[show,setShow]=useState(false);
  return (
    <div>
      <button className='btn' onClick={()=>setShow(!show)}>Show Model</button>
      <Modal visible={show} onClose={setShow}/>
    </div>
  )
}

export default App
