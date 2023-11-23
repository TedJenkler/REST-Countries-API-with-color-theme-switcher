import { useState } from 'react';
import './App.css';
import ColorSwitcher from './Component/ColorSwitcher';
import FlagComponent from './Component/FlagComponent';

function App(){
  const [toggle, setToggle] = useState(false)
  return (
   <div className={toggle === false ? "container lightmode-bg" : "container darkmode-bg"}>
      <div className='row'>
        <ColorSwitcher toggle={toggle} setToggle={setToggle} />
      </div>
      <div className='row'>
        <FlagComponent toggle={toggle} />
      </div>
   </div>
  );
}

export default App;
