import './App.css';
import ColorSwitcher from './Component/ColorSwitcher';
import FlagComponent from './Component/FlagComponent';

function App() {
  return (
   <div className='container lightmode-bg'>
      <div className='row'>
        <ColorSwitcher />
      </div>
      <div className='row'>
        <FlagComponent />
      </div>
   </div>
  );
}

export default App;
