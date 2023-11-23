import { useState } from 'react';
import './App.css';
import ColorSwitcher from './Component/ColorSwitcher';
import FlagComponent from './Component/FlagComponent';

function App() {
  const [toggle, setToggle] = useState(false)
  return (
   <div className='container lightmode-bg'>
      <div className='row'>
        <ColorSwitcher toggle={toggle} setToggle={setToggle} />
      </div>
      <div className='row'>
        <FlagComponent />
      </div>
   </div>
  );
}

export default App;
